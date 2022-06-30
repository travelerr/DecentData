import { useState, useRef, useEffect } from "react";
import { mintNFT } from "../utils/interact.js";
const create = require("ipfs-http-client");

interface IMinterProps {
  walletAddress?: string;
}
interface IMetaData {
  name: string;
  url: string;
  description: string;
}

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
});

function Minter(props: IMinterProps) {
  const [status, setStatus] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusURL, setStatusURL] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [uploadedData, setUploadedData] = useState<ArrayBuffer | null>(null);
  const [multiFileChecked, setMultiFileChecked] = useState<boolean>(false);
  const [urlArr, setUrlArr] = useState<Array<string>>([]);

  const { walletAddress } = props;
  const fileUploadRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fileUploadRef.current !== null && multiFileChecked) {
      fileUploadRef.current.setAttribute("directory", "");
      fileUploadRef.current.setAttribute("multiple", "");
      fileUploadRef.current.setAttribute("webkitdirectory", "");
    } else {
      fileUploadRef.current!.removeAttribute("directory");
      fileUploadRef.current!.removeAttribute("multiple");
      fileUploadRef.current!.removeAttribute("webkitdirectory");
    }
  }, [multiFileChecked]);

  const onMintPressed = async () => {
    if (!walletAddress) {
      setStatus("You must connect a wallet first!");
      return;
    }
    const created = await client.add(uploadedData!, {
      pin: true, // <-- this is the default
    });
    const ipfsUrl = `https://ipfs.infura.io/ipfs/${created.path}`;
    //make metadata
    const metadata: IMetaData = {
      name: name,
      url: ipfsUrl,
      description: description,
    };
    //setUrlArr((prev) => [...prev, ipfsUrl]); MULTI FILE UPLOAD?
    const { success, status } = await mintNFT(metadata);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL(ipfsUrl);
      setStatusMessage(status.split("Block Scout:")[0]);
      setStatusURL(status.split("Block Scout:")[1].trim());
    }
  };

  const retrieveFile = (e: any) => {
    console.log(e);
    const data = e.target.files[0];
    const reader = new window.FileReader();
    if (data) {
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        const buffer: ArrayBuffer = reader.result as ArrayBuffer;
        setUploadedData(Buffer.from(buffer));
        console.log("Buffer data: ", Buffer.from(buffer));
      };
      e.preventDefault();
    }
  };

  const handleMultiFileCheckChange = () => {
    setMultiFileChecked(!multiFileChecked);
  };

  return (
    <section className="position-relative jarallax">
      <div className="position-relative zindex-4 pt-lg-3 pt-xl-5">
        <div className="container zindex-5 pt-5">
          <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
            <div className="col-md-4">
              <h1 className="mb-md-4">Mint an NFT</h1>
              <p className="fs-lg pb-2">
                Simply add your asset's link, name, and description, then press
                "Mint."
              </p>
            </div>
            <div className="col-xl-7 col-md-8 offset-xl-1">
              <form className="needs-validation" noValidate>
                <div className="col-sm-12 mb-4">
                  <div>
                    <h2>💾 Upload Your Data:</h2>
                    <div className="mb-3">
                      <input
                        type="checkbox"
                        id="account"
                        className="form-check-input mr-2 flex-shrink-0"
                        checked={multiFileChecked}
                        style={{ marginRight: "10px" }}
                        onChange={handleMultiFileCheckChange}
                      />
                      <label>Uploading More Than One File?</label>
                    </div>
                    <input
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                      onChange={retrieveFile}
                      ref={fileUploadRef}
                    />
                  </div>
                  <div className="col-sm-12 mb-4">
                    <h2>🤔 Give it a Name:</h2>
                    <input
                      type="text"
                      id="asset-name"
                      className="form-control form-control-lg"
                      onChange={(event) => setName(event.target.value)}
                      required
                      placeholder="e.g. car title"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <h2>📃 Give it a Description</h2>
                    <textarea
                      id="asset-description"
                      className="form-control form-control-lg"
                      onChange={(event) => setDescription(event.target.value)}
                      required
                      placeholder="Description.."
                    ></textarea>
                    <div className="invalid-feedback">
                      Please write your description
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button
                  type="submit"
                  onClick={onMintPressed}
                  className="btn btn-primary btn-lg shadow-primary mt-1 p-4"
                  style={{ minWidth: "175px" }}
                >
                  Mint
                </button>
                {statusMessage && statusURL ? (
                  <>
                    <p className="mt-3 text-danger">{statusMessage}</p>
                    <a
                      id="status"
                      href={statusURL}
                      target="_blank"
                      className="text-danger"
                    >
                      {statusURL}
                    </a>
                  </>
                ) : (
                  <p id="status" className="text-danger mt-3">
                    {status}
                  </p>
                )}
                {url ? (
                  <>
                    <p className="mt-3 text-danger">Your IPFS Data CID:</p>
                    <a
                      id="status"
                      href={url}
                      target="_blank"
                      className="text-danger"
                    >
                      {url}
                    </a>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Minter;

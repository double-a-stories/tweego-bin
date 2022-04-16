import Unzipper from "unzipper";

/////////////////////////////////////
// Unzip a file from a data stream //
/////////////////////////////////////

export default async function unzipStreamAsync(data, destinationDir) {
    // Unzip the result
    try {
        await new Promise((resolve, reject) => {
          const unzip = Unzipper.Extract({ path: destinationDir })
            .on("error", reject)
            .on("close", resolve);
          data.pipe(unzip);
        });
    } catch (err) {
        throw new Error("Error while unzipping:" + err);
    }
}
import axios from "axios";

const UploadImageService = (
    () => {
        const endpoints = {
            burger: "https://localhost:7130/UploadImage"
        };

        const uploadImage = async (image: File) => {
            try {
                const formData = new FormData();
                formData.append("file", image);
                const result = await axios({
                    url: endpoints.burger,
                    method: "POST",
                    data: formData,
                    headers: {"Content-Type" : "multipart/form-data"}
                });
                formData.delete("file");
            } catch (error) {
                console.log(error)
            }
        }
        return {
            uploadImage
        }
    })();

    export default UploadImageService;
import React from "react";
import { Upload, X } from "lucide-react";

const MultipleImageUploader = ({
    images = [],
    ImageUrl = [],
    error = "",
    onChangeImages,
    onChangeImageUrl,
    acceptedTypes = ".jpg,.jpeg,.webp",
    label = "Upload Images",
    helperText = "JPG or WEBP • Max 2MB • 16:9 aspect ratio",
}) => {
    const handleUpload = (e) => {
        const files = Array.from(e.target.files);
        const maxSize = 2 * 1024 * 1024; // 2MB
        const newImages = [];
        let errorMsg = "";

        files.forEach((file) => {
            if (!["image/jpeg", "image/webp", "image/jpg"].includes(file.type)) {
                errorMsg = "Only JPG and WEBP formats are allowed.";
                return;
            }
            if (file.size > maxSize) {
                errorMsg = "Each image must be under 2MB.";
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const arrayBuffer = event.target.result;
                const byteArray = Array.from(new Uint8Array(arrayBuffer));
                newImages.push({
                    FileName: file.name,
                    FileType: file.type,
                    FileData: byteArray,
                });

                if (newImages.length === files.length && !errorMsg) {
                    onChangeImages([...images, ...newImages], "");
                }
            };
            reader.readAsArrayBuffer(file);
        });

        if (errorMsg) {
            onChangeImages(images, errorMsg);
        }
    };

    const removeImageFile = (index) => {
        const updated = [...images];
        updated.splice(index, 1);
        onChangeImages(updated, "");
    };


    const removeImage = (index) => {
        const updated = [...ImageUrl];
        ImageUrl.splice(index, 1);
        onChangeImageUrl(ImageUrl, "");
    };

    // const removeImageFile = (index) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         images: prev.images.filter((_, i) => i !== index),
    //     }));
    // };

    return (
        <div>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}

            <div className="flex flex-wrap gap-4">
                {ImageUrl.map((url, index) => (
                    <div
                        key={index}
                        className="relative w-[250px] aspect-video border rounded-md"
                    >
                        <img
                            src={url}
                            alt={`Preview ${index}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 p-1.5 bg-red-600 text-white rounded-full"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}



                {images.map((item, index) => {
                    const byteArray = new Uint8Array(item.FileData);
                    const blob = new Blob([byteArray], { type: item.FileType });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                        <div
                            key={index}
                            className="relative w-[250px] aspect-video border rounded-md"
                        >
                            <img
                                src={imageUrl}
                                alt={`Preview ${index}`}
                                className="w-full h-full object-cover rounded-md"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/fallback-image.jpg";
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => removeImageFile(index)}
                                className="absolute top-1 right-1 p-1.5 bg-red-600 text-white rounded-full"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    );
                })}

                {/* Upload Trigger */}
                <input
                    type="file"
                    id="image-upload-multiple"
                    multiple
                    accept={acceptedTypes}
                    onChange={handleUpload}
                    className="hidden"
                />
                <label
                    htmlFor="image-upload-multiple"
                    className={`w-[250px] aspect-video border-2 border-dashed p-8 text-center flex flex-col justify-center items-center text-sm text-gray-500 cursor-pointer rounded-lg ${error ? "border-red-300 bg-red-50" : "border-gray-300"
                        }`}
                >
                    <div className="flex flex-col items-center space-y-2 h-full justify-center">
                        <div className="p-3 bg-gray-100 rounded-full">
                            <Upload className="w-6 h-6 text-gray-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                            Click to upload image
                        </p>
                        <p className="text-xs text-gray-500">{helperText}</p>
                    </div>
                </label>
            </div>

            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
    );
};

export default MultipleImageUploader;









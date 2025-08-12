import React, { useState } from "react";
import { Upload, X } from "lucide-react";

const MAX_SIZE_MB = 5;

const ImageUploader = ({
    value,
    onChange,
    error,
    aspectRatio = "aspect-video",
    acceptedTypes = ".jpg, .jpeg, .webp",
    label = "Upload Image",
    helperText = "JPG or WEBP • Max 5MB • Recommended 16:9",
}) => {
    const [previewUrl, setPreviewUrl] = useState(value?.ImageUrl || "");

    const handleFileBrowse = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            onChange(null, "Please select a valid image file");
            return;
        }

        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            onChange(null, `Image size should be less than ${MAX_SIZE_MB}MB`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            const arrayBuffer = loadEvent.target.result;
            const byteArray = Array.from(new Uint8Array(arrayBuffer));
            const preview = URL.createObjectURL(file);

            setPreviewUrl(preview);
            onChange(
                {
                    FileType: file.type,
                    FileData: byteArray,
                    FileName: file.name,
                    ImageUrl: preview,
                },
                null
            );
        };

        reader.onerror = () => {
            onChange(null, "Failed to read file. Please try again.");
        };

        reader.readAsArrayBuffer(file);
    };

    const removeImage = () => {
        setPreviewUrl("");
        onChange(null, null);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <div className={`overflow-hidden w-[250px] ${aspectRatio}`}>
                {!previewUrl ? (
                    <div
                        className={`border-2 border-dashed p-8 text-center rounded-lg w-full h-full ${error ? "border-red-300 bg-red-50" : "border-gray-300"
                            }`}
                    >
                        <input
                            type="file"
                            accept={acceptedTypes}
                            onChange={handleFileBrowse}
                            className="hidden"
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
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
                ) : (
                    <div className="relative w-full h-full rounded-lg">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg border"
                        />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
    );
};

export default ImageUploader;
interface ModelSource {

}

interface ModelSettings {
    framework: string;
    modelSource: string;
    processingUnit: string;
    batchSize: string;
    modelName: string;
    modelUrl: string;
    modelType: string;
}

interface Video {
    detectObjects: string;
    threshold: number;
    overlap: number;
    widthMin: number;
    widthMax: number;
    heightMin: number;
    heightMax: number;
}

export interface DetectionSettings {
    video1: Video;
    video2: Video;
    video3: Video;
    video4: Video;
}

export interface ConfigurationFormState {
    expertMode: boolean;
    displayName: string;
    modelSettings: ModelSettings;
    detectionSettings: DetectionSettings;
    fuseLayer: boolean;
    precisionBoost: boolean;
}

export const websocketParam = "wss://notification.dev.viso.ai/socket.io/?EIO=3&transport=websocket";
export const uirUrl = "https://dev.viso.ai/api/notification/graphql";
export const authBearer = "Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjR2aEkxMmtTVTdVQTRkd2hqLWpJSkluVTBtTUYxX1R0NzY1QTZYVUdiQmMifQ.eyJpZCI6IjY3NjU0ZGRjYTk5OTJiMDAxN2ZkMjQ4OCIsInR5cGUiOiJ3b3Jrc3BhY2UiLCJ3b3Jrc3BhY2VJZCI6IjY3MmI5NDhlZWFlZjI5MDAxNzlhNTdiYyIsInVzZXJQcm9maWxlSWQiOiI2NzY1NGRkY2E5OTkyYjAwMTdmZDI0OGEiLCJzdWJEb21haW4iOiI2NzJiOTQ4ZWVhZWYyOTAwMTc5YTU3YmMiLCJzdWIiOiI2NzY1NGRkY2E5OTkyYjAwMTdmZDI0ODgiLCJpc3MiOiJ2aXNvLmFpIiwiZXhwIjoxNzM2MTgyMzU0LCJpYXQiOjE3MzQ5NzI3NTR9.u_CRZCzaoaFWd2VwWNy-wDeabLpuSy5gNjZdfk-SqBjrhY9k2lG-tvikZZKhfqsBW2mDq9P_BXILy6PZ1qd9BldaVDWhj_KTFwKr6g3hlckx4VRiDa75qTQ0P3b6TrsQ9HFOVJHYfqIZab9_0Va2NBcJv91ho8WTDZ287l_lJueA2JDl4B_K-ICArpcZoz3ptfjC7Aw_iUum_Lt-dKlfohT60RhG_BsT_R8P1A5l8WUWPjiOjp-k19UyPgQm2yGVODxj7wTq-yUQdMlh57Z8W-EG7TD2iioisHEoyEiUPYCWaj9pb1DTK0tMPTLxLSLW4375Jyw03NfPEHfMlum_2g";

export const frameworkOptions = ["PyTorch(default)", "PyTorch1", "PyTorch2", "PyTorch3"];
export const frameworkDefault = "PyTorch(default)";
export const batchSizeOptions = ["1 frame(s)", "2 frame(s)", "3 frame(s)", "4 frame(s)"];
export const batchSizeDefault = "1 frame(s)";
export const processingUnitOptions = ["GPU 1", "GPU 2", "GPU 3", "GPU 4"];
export const processingUnitDefault = "GPU 1";
export const modelSourceOptions = ["Custom Models", "Model 1", "Model 2", "Model 3"];
export const modelSourceDefault = "Custom Models";
export const detectObjectsOptions = ["Person", "Car"];
export const detectObjectsDefault = "Person";
export const videoStreamRequiredFields = ["Width Max", "Width Min", "Height Min", "Height Max"];
export const modelNameOptions = ["construction_site", "car par1", "train station"];

export const defaultFormState: ConfigurationFormState = {
    displayName: "",
    expertMode: false,
    fuseLayer: true,
    precisionBoost: false,
    modelSettings: {
        framework: "PyTorch(default)",
        modelSource: "Custom Models",
        processingUnit: "GPU 1",
        batchSize: "1 frame(s)",
        modelUrl: "",
        modelName: "construction_site",
        modelType: ""
    },
    detectionSettings: {
        video1: {
            detectObjects: "Person",
            threshold: 30,
            overlap: 70,
            widthMin: 1,
            widthMax: 99,
            heightMin: 1,
            heightMax: 99,
        },
        video2: {
            detectObjects: "Car",
            threshold: 30,
            overlap: 70,
            widthMin: 1,
            widthMax: 99,
            heightMin: 1,
            heightMax: 99,
        },
        video3: {
            detectObjects: "Person",
            threshold: 30,
            overlap: 70,
            widthMin: 1,
            widthMax: 99,
            heightMin: 1,
            heightMax: 99,
        },
        video4: {
            detectObjects: "Car",
            threshold: 30,
            overlap: 70,
            widthMin: 1,
            widthMax: 99,
            heightMin: 1,
            heightMax: 99,
        },
    }
};

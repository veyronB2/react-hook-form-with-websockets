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

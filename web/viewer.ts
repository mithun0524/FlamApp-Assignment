// TypeScript code for web viewer
interface FrameStats {
    fps: number;
    resolution: string;
}

class FrameViewer {
    private imageElement: HTMLImageElement;
    private statsElement: HTMLElement;

    constructor() {
        this.imageElement = document.getElementById('frameImage') as HTMLImageElement;
        this.statsElement = document.getElementById('stats') as HTMLElement;
        this.init();
    }

    private init(): void {
        // Simulate receiving a frame (base64 image)
        this.displayFrame('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='); // Placeholder
        this.updateStats({ fps: 15, resolution: '640x480' });
    }

    public displayFrame(base64Image: string): void {
        this.imageElement.src = base64Image;
    }

    public updateStats(stats: FrameStats): void {
        this.statsElement.textContent = `FPS: ${stats.fps} | Resolution: ${stats.resolution}`;
    }
}

// Initialize viewer
new FrameViewer();
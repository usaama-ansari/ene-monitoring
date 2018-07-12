export interface WmsRealtimeDataInt {
    lastUpdated: string,
    parameters: {
        name: string,
        unit: string,
        value: string
    }[]
}
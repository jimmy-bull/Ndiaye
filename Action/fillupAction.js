export default fillupAction = (ImageDataState) => {
    return {
        type: 'FILL_UP_COLOR_OBJECT',
        payload: { imageDataStatePayload: ImageDataState }
    }
}
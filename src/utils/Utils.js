export function getTime(times) {
    if (!times){
        return "N/A"
    }
    {
        let seconds = parseInt((times/1000)%60)
        let minutes = parseInt((times/(1000*60))%60)
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds
        return minutes + ":" + seconds
    }
}
export default function generateToken(setIsTokenGen, timerRef) {
    setIsTokenGen(true);

    let duration = 15 * 60; // 15 minutes in seconds

    const countdown = setInterval(() => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;

        if (timerRef.current) {
            timerRef.current.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`;
        }

        if (duration <= 0) {
            clearInterval(countdown);
            setIsTokenGen(false);
        } else {
            duration--;
        }
    }, 1000);
}

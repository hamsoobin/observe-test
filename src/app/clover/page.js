import Link from "next/link";

export default function Clover() {
    const clover3 = "./assets/images/triple.png"
    const clover4 = "./assets/images/lucky.png"

    const loopMax = 91

    const lucky = Math.floor(Math.random() * 90)

    return (
        <div className="fn-app">
            <div className="fn-content-section">
                <div className="fn-count-section">
                    <img src="./assets/images/stop_watch.png" className="fn-stop-watch"/>
                    <p className="fn-count-text">00:37</p>
                </div>
                <div className="fn-lv-section">
                    <p className="fn-lv">Lv.1</p>
                    <p className="fn-lv-title">네잎 클로버 찾기</p>
                </div>
                <div className="fn-clover-section">
                    {Array(loopMax).fill(0).map((_, i) => {
                        return (i === lucky)
                            ?
                            <Link href="/find-i">
                                <img key={i} src={clover4} className="fn-clover-img"/>
                            </Link>
                            : <img key={i} src={clover3} className="fn-clover-img"/>
                    })}
                </div>
            </div>
        </div>
    )
}
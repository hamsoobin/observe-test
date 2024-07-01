import Link from "next/link";

export default function FindO() {
    return (
        <div className="fn-app">
            <div className="fn-content-section">
                <div className="fn-count-section">
                    <img src="./assets/images/stop_watch.png" className="fn-stop-watch"/>
                    <p className="fn-count-text">00:37</p>
                </div>
                <div className="fn-lv-section">
                    <p className="fn-lv">Lv.3</p>
                    <p className="fn-lv-title">숫자 0 사이에서 알파벳 O 찾기</p>
                </div>
                <div className="fn-find-section">
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">0000000000000000O0</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">00000000O000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                    <p className="fn-i">000O00000000000000</p>
                    <p className="fn-i">000000000000000000</p>
                </div>
                <Link href="/result">
                <button className="fn-next-btn">다음</button>
                </Link>
            </div>
        </div>
    )
}
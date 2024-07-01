import Link from "next/link";

export default function FindI() {
    return (
        <div className="fn-app">
            <div className="fn-content-section">
                <div className="fn-count-section">
                    <img src="./assets/images/stop_watch.png" className="fn-stop-watch"/>
                    <p className="fn-count-text">00:37</p>
                </div>
                <div className="fn-lv-section">
                    <p className="fn-lv">Lv.2</p>
                    <p className="fn-lv-title">소문자 i 찾기</p>
                </div>
                <div className="fn-find-section">
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIiIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIiIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IiIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                    <p className="fn-i">IIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                </div>
                <Link href="/find-o">
                <button className="fn-next-btn">다음</button>
                </Link>
            </div>
        </div>
    )
}
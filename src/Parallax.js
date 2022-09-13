import './Parallax.css'

export const Parallax = () => {
    return (
        <>
            <div className="content">
                <div className="layer background background-animation">
                    <img
                        alt=''
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png"
                    />
                </div>
                <div className="layer train train-animation">
                    <img
                        alt=''
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png"
                    />
                </div>
                <div className="layer foreground foreground-animation">
                    <img
                        alt=''
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png"
                    />
                </div>
            </div>

        </>
    )
}
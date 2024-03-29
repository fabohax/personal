import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Models = () => {

    return(
        <div>
            <header><Link href="/">Fabo Hax</Link></header>
            <Link href="/ai" id="next">
                <Image src="/arrow.svg" height="36" width="36" alt="fabohax-xyz-ico"></Image>
            </Link>
            <div className="linx">
                <Link href="/sites">Sites</Link>
                <Link href="/models" className='selected'>Models</Link>
                <Link href="/ai">AI</Link>
                <Link href="/architecture">Architecture</Link>
            </div>
            <div className="grid visible">
                <div className="grid-item">
                    <Link href="https://www.cgtrader.com/3d-models/interior/other/minimalistic-chess-set" target="_blank"><Image src="/models/hax_chess_fabohax_050623.png" height="500" width="500" alt="fabohax-xyz-model" /></Link>
                </div>
                <div className="grid-item">
                    <Link href="https://www.cgtrader.com/3d-models/interior/living-room/l-shaped-convertible-sofa-bed-high-poly-fabric-textured" target="_blank"><Image src="/models/lshapedconvertiblesofa_fabohax_050623.avif" height="500" width="500" alt="fabohax-model" /></Link>
                </div>
                <div className="grid-item">
                <Link href="https://www.cgtrader.com/3d-models/character/clothing/apple-like-eyeglasses" target="_blank"><Image src="/models/glazz_fabohax_240523.png" height="500" width="500" alt="fabohax-model" /></Link>
                </div>

                <div className="grid-item">
                    <Image src="/models/tekuni_fabohax_100822.png" height="500" width="500" alt="Tekuni es la mascota de la Universidad Nacional de Ingeniería" />
                </div>
                <div className="grid-item">
                    <Image src="/models/2seas_shot_fabohax_191122.png" height="500" width="500" alt="fabohax-model"/>
                </div>
                <div className="grid-item">
                    <Image src="/models/sif_polygod_fabohax_120222.png" height="500" width="500" alt="fabohax-model"/>
                </div>
                <div className="grid-item">
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src="/models/decentraland_fire_fabohax_090422.mp4" type="video/mp4" alt="fabohax-model"/>
                    </video>
                </div>
                <div className="grid-item">
                    <Image src="/models/tob_hax.png"  height="500" width="500"  alt="fabohax-xyz-model"/>
                </div>
                <div className="grid-item">
                    <Image src="/models/koala_fabohax.png"  height="500" width="500"  alt="fabohax-xyz-model"/>
                </div>
                <div className="grid-item">
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src="/models/tierra_sudando_fabohax.mp4" type="video/mp4" alt="fabohax-model"/>
                    </video>
                </div>
                <div className="grid-item">
                    <Image src="/models/bitflag_fabohax.gif" height="500" width="500" alt="fabohax-xyz-model"/>
                </div>
                <div className="grid-item">
                    <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/models/ch355_nft_fabohax.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="grid-item">
                    <Image src="/models/a_ball_fabohax.jpg" height="500" width="500" alt="fabohax-xyz-model" />
                </div>
                <div className="grid-item">
                    <Image src="/models/x01x02_fabohax.jpg" height="500" width="500" alt="fabohax-xyz-model" />
                </div>
                <div className="grid-item">
                    <Image src="/models/x01x03_fabohax.jpg" height="500" width="500" alt="fabohax-xyz-model" />
                </div>
                <div className="grid-item">
                    <Image src="/models/skull_fabohax.jpg" height="500" width="500" alt="fabohax-xyz-model" />
                </div>
            </div> 
        </div>
    )
};

export default Models;
import {motion} from 'framer-motion'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const StoryText = () => {
    return ( <>
    <Parallax pages={3} >
    <ParallaxLayer factor={{}} speed={1}>
        <motion.h2 
        initial={{y:200, opacity:0}}
        animate={{y:0, opacity:1}} 
        transition={{duration:2}} className='Lead'> Damso qui est Tu ?</motion.h2>
        <div>
            <p className='opening'>Vertaald betekent deze zin 'damso wie ben je' ,maar de vraag die iedereen 
                zich stelt is eerder 'wat ben je' aangezien het personage van damso zo onbegrijpelijk is.</p>
            <br/>       
            <p className='opening'>William Kalubi (Kinshasa, 10 mei 1992) is een Congolees-Belgische rapper. Hij is vooral populair in Franstalig België en Frankrijk.</p>
            </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1}
   
        speed={2}>
            <motion.h2 
        initial={{y:200, opacity:0}}
        animate={{y:0, opacity:1}} 
        transition={{duration:2}} className='Lead'> Biografie</motion.h2>
            <p className='opening'>Omwille van een gewapend conflict vluchtte William Kalubi op negenjarige leeftijd samen met zijn familie weg uit Congo. Naar deze gebeurtenis zou hij later regelmatig verwijzen in nummers als "Graine de sablier", "Bruxelles vie" en "K.Kin la belle". 
                Hij vestigde zich met zijn familie in België, in de Congolese wijk Matonge in Elsene.</p>
                <br />
            <p className='opening'>In 2006 begon hij te rappen onder de artiestennaam Damso en richtte hij met zijn jeugdvriend Dolfa de groep OPG op. In 2014 bracht hij zijn eerste soloproject uit, de mixtape Salle d'attente. Later dat jaar bracht hij met OPG de mixtape MMMXIII uit.</p>

    </ParallaxLayer>

    <ParallaxLayer offset={2} speed={2}>
        <p className='opening'>In 2015 verwierf Damso voor het eerst bekendheid door het nummer "Poséidon" 
        dat op de mixtape OKLM van de Franse rapper Booba verscheen. 
        Vervolgens sloot hij zich ook aan bij Booba's rapformatie en label 92i (92 Injection) 
        en tekende hij een platencontract bij Universal. In juli 2016 verscheen zijn debuutalbum Batterie faible, 
        dat in Frankrijk platina behaalde. Het album bevatte onder meer de nummers "BruxellesVie" en 
        "Paris c'est loin" (feat. Booba).
         Met dat laatste nummer bereikte Damso de vierde plaats in de Franse hitlijst</p>
         <br />
         <p className="opening">Een jaar later scoorde hij met het album Ipséité een nog grotere hit. 
         Het album werd in Frankrijk meer dan 400.000 keer verkocht en ook in België werd hij voor het eerst onderscheiden met platina.
    In 2020 maakte Damso een comeback met het album Qalf, waaraan in 2021 een vervolg Qalf Infinity gebreid werd. Het album werd bekroond met 3 keer platina.
 Bxl Zoo en Morose werden de bekendste singles uit dit tijdperk.</p>
    </ParallaxLayer>
    </Parallax>
    
    </> );
}
 
export default StoryText;
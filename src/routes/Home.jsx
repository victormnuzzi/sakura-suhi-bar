import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import baseStyle from './base.module.css';
import homeStyle from './home.module.css';


function Home() {

  /* Hook - useState */
  const [slidePreview, setSlidePreview] = useState(1);

  const imagensSlide = [
    {id:'1', image:'./src/assets/img/niguiris.jpg'},
    {id:'2', image:'./src/assets/img/guiozas.jpg'},
    {id:'3', image:'./src/assets/img/bowl.jpg'},
    {id:'4', image:'./src/assets/img/combinado.jpg'}
  ];

  const imagensCard = [
    {id:'1', image:'./src/assets/img/card-niguiris.jpg', name:'Niguiris Tradicionais', description:'A simplicidade elevada a um nível sublime. Peixes frescos sobre almofadas de arroz perfeito.', price:'R$ 34,99'},
    {id:'2', image:'./src/assets/img/card-guiozas.jpg', name:'Guiozas Grelhados', description:'Um aperitivo irresistível. Crocante por fora, suculento por dentro. ', price:'R$ 22,99'},
    {id:'3', image:'./src/assets/img/card-bowl.jpg', name:'Bowl de Frutos do Mar', description:'Uma deliciosa fusão de peixes frescos, camarões suculentos e molho especial sobre arroz perfeito.', price:'R$ 48,99'},
    {id:'4', image:'./src/assets/img/card-combinado.jpg', name:'Combinado Sakura', description:'Uma explosão de sabores japoneses em um único prato. Delicie-se com nossas seleções variadas.', price:'R$ 47,99'}
  ];

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 720){
        setSlidePreview(1);
      }else{
        setSlidePreview(2)
      }
    }

    handleResize();
    
    window.addEventListener('resize', handleResize);

    return() => {
      window.removeEventListener('resize', handleResize);
    } 
  }, [])

  const scrollToCardapio = () => {
    const cardapioSection = document.getElementById('cardapio');
    if (cardapioSection) {
      cardapioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <section className={homeStyle.sectionSlideShow}>
        <Swiper
          slidePreview={slidePreview}
          pagination={{clickable:true}}
          navigation
        >
          {imagensSlide.map((item) =>(       
            <SwiperSlide key={item.id}>
              <div className={homeStyle.slideContainer}>
                <img src={item.image} alt="slide" className={homeStyle.slideItem}/>
                <div className={homeStyle.slideContentContainer}>
                  <h2 className={homeStyle.slideTittle}>SAKURA SUSHI BAR</h2>
                  <p className={homeStyle.slideText}>Descubra o sabor autêntico do Japão. Delicie-se com nossos pratos exclusivos.</p>
                  <button onClick={scrollToCardapio} className={homeStyle.slideBtn}>Ver cardápio completo</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section >

      <section className={`${baseStyle.sectionContainer} ${homeStyle.sectionMenu}`} id='cardapio'>

        {/* ---------------------- CARDS ---------------------- */}

        <h2 className={homeStyle.menuTittle}>Cardápio</h2>

        <div className={homeStyle.cardsContainer}>

          <div className={homeStyle.cardsColumn}>

            {/* ---------- CARD 1 ---------- */}
            <div className={homeStyle.cardContainer}>
              <div className={homeStyle.imgContainer}>
                <img src={imagensCard[3].image} alt="Foto do combinado sakura" />
              </div>
              <div className={homeStyle.textContainer}>
                <h2 className={homeStyle.tittle}>{imagensCard[3].name}</h2>
                <p className={homeStyle.description}>{imagensCard[3].description}</p>
                <p className={homeStyle.price}>{imagensCard[3].price}</p>
              </div>
            </div>
            {/* ---------- CARD 2 ---------- */}
            <div className={homeStyle.cardContainer}>
              <div className={homeStyle.imgContainer}>
                <img src={imagensCard[1].image} alt="Foto dos niguiris" />
              </div>
              <div className={homeStyle.textContainer}>
                <h2 className={homeStyle.tittle}>{imagensCard[1].name}</h2>
                <p className={homeStyle.description}>{imagensCard[1].description}</p>
                <p className={homeStyle.price}>{imagensCard[1].price}</p>
              </div>
            </div>
          </div>

          <div className={homeStyle.cardsColumn}>
            {/* ---------- CARD 3 ---------- */}
            <div className={homeStyle.cardContainer}>
              <div className={homeStyle.imgContainer}>
                <img src={imagensCard[0].image} alt="Foto do guiozas" />
              </div>
              <div className={homeStyle.textContainer}>
                <h2 className={homeStyle.tittle}>{imagensCard[0].name}</h2>
                <p className={homeStyle.description}>{imagensCard[0].description}</p>
                <p className={homeStyle.price}>{imagensCard[0].price}</p>
              </div>
            </div>
            {/* ---------- CARD 4 ---------- */}
            <div className={homeStyle.cardContainer}>
              <div className={homeStyle.imgContainer}>
                <img src={imagensCard[2].image} alt="Foto dos hossomakis" />
              </div>
              <div className={homeStyle.textContainer}>
                <h2 className={homeStyle.tittle}>{imagensCard[2].name}</h2>
                <p className={homeStyle.description}>{imagensCard[2].description}</p>
                <p className={homeStyle.price}>{imagensCard[2].price}</p>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </>
  )
}

export default Home

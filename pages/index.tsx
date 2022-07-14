import { useState } from 'react';
import Head from '../node_modules/next/head';
import styles from '../styles/Home.module.css';

export default function Home() {


  const [skolioz, setSkolioz] = useState(false);
  const [arms, setarms] = useState(false);
  const [throat, setThroat] = useState(false);
  const [lungs, setLungs] = useState(false);
  const [legs, setLegs] = useState(false);
  const [knee, setKnee] = useState(false);
  const [hip, setHip] = useState(false);
  const [fatigue, setFatigue] = useState(false);

  function showSkolioz() {
    setSkolioz(true)
    setarms(false)
    setThroat(false)
    setLungs(false)
    setLegs(false)
    setKnee(false)
    setHip(false)
    setFatigue(false)
  }

  function showArms() {
    setSkolioz(false)
    setarms(true)
    setThroat(false)
    setLungs(false)
    setLegs(false)
    setKnee(false)
    setHip(false)
    setFatigue(false)
  }

  function showThroat() {
    setSkolioz(false)
    setarms(false)
    setThroat(true)
    setLungs(false)
    setLegs(false)
    setKnee(false)
    setHip(false)
    setFatigue(false)
  }

  function showLungs() {
    setSkolioz(false)
    setarms(false)
    setThroat(false)
    setLungs(true)
    setLegs(false)
    setKnee(false)
    setHip(false)
    setFatigue(false)
  }

  function showLegs() {
    setSkolioz(false)
    setarms(false)
    setThroat(false)
    setLungs(false)
    setLegs(true)
    setKnee(false)
    setHip(false)
    setFatigue(false)
  }

  function showKnee() {
    setSkolioz(false)
    setarms(false)
    setThroat(false)
    setLungs(false)
    setLegs(false)
    setKnee(true)
    setHip(false)
    setFatigue(false)
  }

  function showHip() {
    setSkolioz(false)
    setarms(false)
    setThroat(false)
    setLungs(false)
    setLegs(false)
    setKnee(false)
    setHip(true)
    setFatigue(false)
  }

  function showFatigue() {
    setSkolioz(false)
    setarms(false)
    setThroat(false)
    setLungs(false)
    setLegs(false)
    setKnee(false)
    setHip(false)
    setFatigue(true)
  }

  const Svg = () => {
    return (
      <svg className={styles.cross} width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_299_600)">
          <circle cx="45.5" cy="41.5" r="20.5" fill="#1A6EA0" />
        </g>
        <mask id="path-2-inside-1_299_600" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50 29H42V37L34 37V45H42V53H50V45H58V37L50 37V29Z" />
        </mask>
        <path d="M42 29V28H41V29H42ZM50 29H51V28H50V29ZM42 37V38L43 38V37H42ZM34 37L34 36H33V37H34ZM34 45H33V46H34V45ZM42 45H43V44H42V45ZM42 53H41V54H42V53ZM50 53V54H51V53H50ZM50 45V44H49V45H50ZM58 45V46H59V45H58ZM58 37H59V36H58V37ZM50 37H49V38H50V37ZM42 30H50V28H42V30ZM43 37V29H41V37H43ZM34 38H42V36L34 36L34 38ZM35 45V37H33V45H35ZM42 44H34V46H42V44ZM43 53V45H41V53H43ZM50 52H42V54H50V52ZM49 45V53H51V45H49ZM58 44H50V46H58V44ZM57 37V45H59V37H57ZM50 38L58 38V36L50 36V38ZM49 29V37H51V29H49Z" fill="white" mask="url(#path-2-inside-1_299_600)" />
        <defs>
          <filter id="filter0_d_299_600" x="0" y="0" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_299_600" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_299_600" result="shape" />
          </filter>
        </defs>
      </svg>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title >А вдруг СМА?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>А вдруг СМА?</h1>
        <p className={styles.description}>Выберите, кто Ваш пациент:</p>
        <div className={styles.two_columns}>
          <div className={styles.left_column}>
            <p className={styles.column_title}>Взрослый</p>
            <div className={styles.photo_women}></div>
            <div className={styles.conteiner_for_text}><p className={styles.info_text}>Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.</p></div>
            <div className={styles.conteiner_for_text}><p className={styles.info_text}>По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.
            </p></div>
            <div className={styles.conteiner_for_text}><p className={styles.info_text}>По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.</p></div>
          </div>
          <div className={styles.right_column}>
            <p className={styles.column_title}>Ребенок</p>
            <div className={styles.photo_baby}></div>
            <div className={styles.conteiner_for_text}><p className={styles.info_text}>Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
              движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
              осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
              в отношении наличия СМА.
            </p></div>
            <div className={styles.conteiner_for_text}>
              <p className={styles.info_text}>По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.
              </p></div>
          </div>
        </div>
        <p className={styles.description_bottom}>Сообщает ли один из ваших пациентов о следующих симптомах? <span className={styles.span}>(нажмите на любую иконку и узнайте больше)</span></p>
        <div className={styles.background}>
          <p className={styles.image_text}>Взрослый</p>

          <div className={styles.skolioz} onClick={showSkolioz}>
            {skolioz && <p className={styles.skolioz_text}>Сколиоз</p>}
            <Svg></Svg>
          </div>
          <div className={styles.arms} onClick={showArms}>
            {arms && <p className={styles.arms_text}>Ограниченная способность поднимать руки и переносить предметы</p>}
            <Svg></Svg>
          </div>
          <div className={styles.throat} onClick={showThroat}>
            {throat && <p className={styles.throat_text}>Нарушения жевания и глотания</p>}
            <Svg></Svg>
          </div>
          <div className={styles.lungs} onClick={showLungs}>
            {lungs && <p className={styles.lungs_text}>Дыхательная недостаточность/ респираторная дисфункция</p>}
            <Svg></Svg>
          </div>
          <div className={styles.legs} onClick={showLegs}>
            {legs && <p className={styles.legs_text}>Неспособность бегать, изменение походки</p>}
            <Svg></Svg>
          </div>
          <div className={styles.knee} onClick={showKnee}>
            {knee && <p className={styles.knee_text}>Контрактура суставов</p>}
            <Svg></Svg>
          </div>
          <div className={styles.hip} onClick={showHip}>
            {hip && <p className={styles.hip_text}>Вывих бедра</p>}
            <Svg></Svg>
          </div>
          <div className={styles.fatigue} onClick={showFatigue}>
            {fatigue && <p className={styles.fatigue_text}>Утомляемость</p>}
            <Svg></Svg>
          </div>
          <div className={styles.circle}>
          </div>
        </div>
      </main>
    </div>
  )
}

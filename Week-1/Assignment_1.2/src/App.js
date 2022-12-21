import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";

function App() {
  const [musicList, setmusicList] = useState([
    {
      name:"One Dance",
      author:"Crake feat CatKid & Cyla",
      duration:"2:54",
      link:"",
    },
    {
      name:"Panda",
      author:"Cattee",
      duration:"4:06",
      link:"",
    },
    {
      name:"Can't Stop the Feeling!",
      author:"Catin Cimberlake",
      duration:"3:56",
      link:"",
    },
    {
      name:"Work From Home",
      author:"Cat Harmony feat Colla",
      duration:"3:34",
      link:"",
    },
  ])
  return (
    <div className='App flx-cl'>
      {/* MAIN-SECTION */}
      <header className='flx-rw main-sec'>

        {/* NAVBAR */}
        <nav className='navbar bck-clr-gry'>
          <div className='nav-icn-cont flx-cl flx-1'>
            <div className='nav-icns flx-1'>
              <i className="las la-bars"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-home"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-search"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-volume-up"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-user"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-spotify"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-cog"></i>
            </div>
            <div className='nav-icns flx-1'>
              <i className="las la-soundcloud"></i>
            </div>
            

            {/* <i className="las la-play"></i>
            <i className="las la-plus"></i>
            <i className="las la-ellipsis-h"></i>
            <i className="las la-step-backward"></i>
            <i className="las la-step-forward"></i>
            <i className="las la-undo-alt"></i>
            <i className="las la-random"></i> */}

          </div>

        </nav>

        {/* MUSIC-SECTION */}
        <section className=''>

          {/* MUSIC-SECTION-UPPER */}
          <section className='msc-sec-upr flx-rw'>
            <div className='bnr-img-cont'>
              <img src='https://vif1g.csb.app/src/assets/cattyboard.jpg'/>
            </div>
            <div className='flx-cl msc-sec-upr-cont'>
              <p className='mrg-0 clr-white fnt-sz-1 mrg-bttm-1'>CattyBoard Top 100 Single Charts (11.06.36)</p>
              <p className='mrg-0 clr-white fnt-sz-2'>Unknown Artist</p>
              <p className='mrg-0 clr-white fnt-sz-2 mrg-bttm-1'>2016. Charts. 100 songs</p>
              <div className='flx-rw msc-sec-upr-cntrls'>
                <div className='flx-rw'>
                  <i className="las la-play clr-white"></i>
                  <p className='mrg-0 clr-white fnt-sz-3'>Play All</p>
                </div>
                <div className='flx-rw'>
                  <i className="las la-plus clr-white"></i>
                  <p className='mrg-0 clr-white fnt-sz-3'>Add to</p>
                </div>
                <div className='flx-rw'>
                  <i className="las la-ellipsis-h clr-white"></i>
                  <p className='mrg-0 clr-white fnt-sz-3'>More</p>
                </div>
              </div>
            </div>
          </section>

          {/* MUSIC-SECTION-LOWER */}
          <section className=''>
            {musicList.map((data,index) => {
              return(
                <div className={`flx-rw ${index%2 === 0 && "bck-clr-gry"} music-list`} key={index}>
                  <div className='flx-1'>
                    <p className='mrg-0'>{index+1}.{data.name}</p>
                  </div>
                  <div className='flx-1'>
                    <p className='mrg-0'>{data.author}</p>
                  </div>
                  <div className='flx-1'>
                    <p className='mrg-0'>{data.duration}</p>
                  </div>
                  <div className='flx-1'>
                    <div className='list-lnk-butt'>
                      <p className='mrg-0'>CATTY CLOUD SYNC</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </section>

        </section>

      </header>

      {/* PLAYER-CONTROLS-SECTION */}
      <div className='plyr-cntrl-sec flx-rw'>
        <div className='flx-rw flx-1'>
          <div className='plyr-img-cont'>
            <img src='https://vif1g.csb.app/src/assets/cattyboard.jpg'/>
          </div>
          <div className='plyr-data-cont'>
            <p className='mrg-0 clr-white musc-title fnt-sz-2'>If It Ain't Love</p>
            <p className='mrg-0 clr-white musc-sub-title fnt-sz-2'>Catson Derulo</p>
          </div>
        </div>
        <div className='flx-rw flx-1 plyr-cntrls'>
          <div className='flx-1 plyr-cntrls-indi'>
            <i className="las la-step-backward clr-white"></i>
          </div>
          <div className='flx-1 plyr-cntrls-indi'>
            <i className="las la-play clr-white"></i>
          </div>
          <div className='flx-1 plyr-cntrls-indi'>
            <i className="las la-step-forward clr-white"></i>
          </div>
          <div className='flx-1 plyr-cntrls-indi'>
            <i className="las la-undo-alt clr-white"></i>
          </div>
          <div className='flx-1 plyr-cntrls-indi'>
            <i className="las la-random clr-white"></i>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;

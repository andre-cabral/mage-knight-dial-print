import Arc from '@/app/ui/dialtop/arc';
import CurvedText from './ui/dialtop/curved-text';
import Factions from './ui/dialtop/factions';
 
export default function HomePage() {
  return (
    <div className="container">
      <div className="dial">
          <div className="dial__click dial__click--0">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">20</p>
              <p className="dial__stat dial__stat--dmg dial__stat--first-value dial__stat--round dial__stat--black">4</p>
              <div className="dial__stat dial__stat--dmg dial__stat--start-bg"></div>
              <p className="dial__stat dial__stat--dmg dial__stat--first-ability dial__stat--round dial__stat--black"></p>
              <p className="dial__stat dial__stat--lvl">5</p>
          </div>
          <div className="dial__click dial__click--1">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">16</p>
              <p className="dial__stat dial__stat--dmg">5</p>
              <p className="dial__stat dial__stat--lvl">4</p>
          </div>
          <div className="dial__click dial__click--2">
              <p className="dial__stat dial__stat--spd dial__stat--grey">1</p>
              <p className="dial__stat dial__stat--atk dial__stat--green">2</p>
              <p className="dial__stat dial__stat--def dial__stat--round dial__stat--black">18</p>
              <p className="dial__stat dial__stat--dmg dial__stat--blue">1</p>
              <p className="dial__stat dial__stat--lvl">3</p>
          </div>
          <div className="dial__click dial__click--3">
              <p className="dial__stat dial__stat--spd dial__stat--orange">1</p>
              <p className="dial__stat dial__stat--atk dial__stat--yellow">2</p>
              <p className="dial__stat dial__stat--def dial__stat--red">13</p>
              <p className="dial__stat dial__stat--dmg dial__stat--blue dial__stat--round">2</p>
              <p className="dial__stat dial__stat--lvl">2</p>
          </div>
          <div className="dial__click dial__click--4">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">12</p>
              <p className="dial__stat dial__stat--def">17</p>
              <p className="dial__stat dial__stat--dmg dial__stat--blue dial__stat--round">3</p>
              <p className="dial__stat dial__stat--lvl">1</p>
          </div>
          <div className="dial__click dial__click--5">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">3</p>
              <p className="dial__stat dial__stat--dmg">4</p>
          </div>
          <div className="dial__click dial__click--6">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">3</p>
              <p className="dial__stat dial__stat--dmg">4</p>
          </div>
          <div className="dial__click dial__click--7">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">3</p>
              <p className="dial__stat dial__stat--dmg">4</p>
          </div>
          <div className="dial__click dial__click--8">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">3</p>
              <p className="dial__stat dial__stat--dmg">4</p>
          </div>
          <div className="dial__click dial__click--9">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">3</p>
              <p className="dial__stat dial__stat--dmg">4</p>
          </div>
          <div className="dial__click dial__click--10">
              <p className="dial__stat dial__stat--spd">1</p>
              <p className="dial__stat dial__stat--atk">2</p>
              <p className="dial__stat dial__stat--def">3</p>
              <p className="dial__stat dial__stat--dmg">4</p>
          </div>
          <div className="dial__click dial__click--11">
              <p className="dial__stat dial__stat--spd dial__stat--skull">Dead</p>
              <p className="dial__stat dial__stat--atk dial__stat--skull">Dead</p>
              <p className="dial__stat dial__stat--def dial__stat--skull">Dead</p>
              <p className="dial__stat dial__stat--dmg dial__stat--skull">Dead</p>
          </div>
      </div>

      <div className="dialtop">
        <Arc arcValue={90} />
        <CurvedText name='Utem Crossbowman' points={11} />
        <Factions factions='Heroes, Draconum ' />
          <div className="rank">
              <div className="rank__star rank__star--1"></div>
              <div className="rank__star rank__star--2"></div>
              <div className="rank__star rank__star--3"></div>
          </div>
          <div className="miniature-number">
              <div className="miniature-number__collection miniature-number__collection--whirlwind"></div>
              <p className="miniature-number__number">008</p>
          </div>
          <div className="range">
              <p className="range__value">10</p>
              <div className="range__arrow range__arrow--1"></div>
              <div className="range__arrow range__arrow--2"></div>
              <div className="range__arrow range__arrow--3"></div>
              <div className="range__arrow range__arrow--4"></div>
          </div>
      </div>

      <div className="dialtop">
        <Arc arcValue={180} />
        <CurvedText name='Utem Crossbowman' points={11} />
        <Factions factions='Atlantis Guild ' />
          <div className="rank">
              <div className="rank__star rank__star--1"></div>
              <div className="rank__star rank__star--2"></div>
              <div className="rank__star rank__star--3"></div>
          </div>
          <div className="miniature-number">
              <div className="miniature-number__collection miniature-number__collection--minions"></div>
              <p className="miniature-number__number">008</p>
          </div>
          <div className="range">
              <p className="range__value">0</p>
              <div className="range__arrow range__arrow--1"></div>
          </div>
      </div>

      <div className="dialtop">
        <Arc arcValue={270} />
        <CurvedText name='Utem Crossbowman' points={11} />
        <Factions factions=' Draconum ' />
          <div className="rank">
              <div className="rank__star rank__star--1"></div>
              <div className="rank__star rank__star--2"></div>
              <div className="rank__star rank__star--3"></div>
          </div>
          <div className="miniature-number">
              <div className="miniature-number__collection miniature-number__collection--unlimited"></div>
              <p className="miniature-number__number">008</p>
          </div>
          <div className="range">
              <p className="range__value">8</p>
              <div className="range__arrow range__arrow--1"></div>
              <div className="range__arrow range__arrow--2"></div>
              <div className="range__arrow range__arrow--3"></div>
              <div className="range__arrow range__arrow--4"></div>
          </div>
      </div>

  </div>
  );
}
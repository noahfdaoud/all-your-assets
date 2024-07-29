import iconPath from './assets/storage/3D/icon.png';

function Tile(): JSX.Element {
  return(
    <>
      <div>
        <caption>Tile Name</caption>
        <img src={iconPath} alt="Icon" />
        <desc>This is the tile description</desc>
      </div>
    </>
  )
}

export default Tile;

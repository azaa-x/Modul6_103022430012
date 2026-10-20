function KartuMenu(props) {
  return (
    <div className="card">
        <h1>{props.menu}</h1>
        <h2>{props.nama}</h2>
        <p>{props.harga}</p>
        <p>{props.kategori}</p>
    </div>
  );
}

export default KartuMenu;

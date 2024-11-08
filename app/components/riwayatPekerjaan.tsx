function ItemRiwayatPekerjaan(props) {
    return (
    <div className="border-2 m-2 rounded-lg bg-green-300 text-blue-900 p-3">
            <div>{props.tahun}</div>
            <div>{props.instansi}</div>
            <div>{props.sebagai}</div>
          </div>
    )
  }

export default function RiwayatPekerjaan(){
    return(
        <div className="container">
        <h2 className="mt-40 text-2xl text-blue-900 font-bold">Riwayat Pekerjaan</h2>
        
        <ItemRiwayatPekerjaan tahun="2018-2020" instansi="Apotek Afqar Rancaekek" sebagai="Kasir"/>
        <ItemRiwayatPekerjaan tahun="2020-2022" instansi="Honda Daya Motor Rancaekek" sebagai="Sales"/>
        <ItemRiwayatPekerjaan tahun="2022-2025" instansi="PT. HM Sampoerna" sebagai="Marketing"/>
        <ItemRiwayatPekerjaan tahun="2025-Sekarang" instansi="PT. Pindad" sebagai="Administrasi"/>
      
      </div>
    )
}
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#JABATAN#", value.biodata.jabatan)
    .replace("#LOKASI#", value.location)
    .replace("#STATUS#", value.checkin)
    .replace("#HARIKERJA#", value.biodata.hari_kerja);
  Array.replace("#JAMKERJA#", value.biodata.jam_kerja)
    .replace("#JAMKERJA#", value.biodata.jam_kerja.jam_keluarjam_keluar)
    .replace("#JAMKERJA#", value.biodata.jam_keluar)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}

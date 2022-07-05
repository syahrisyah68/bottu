import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCoHJ9D9Sy3TLp0mUHBrj1cg*\nSubscribe Untuk Mengetahui Update Selanjutnya:https://youtube.com/channel/UCoHJ9D9Sy3TLp0mUHBrj1cg\nSilahkan Subscribe Channel saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler

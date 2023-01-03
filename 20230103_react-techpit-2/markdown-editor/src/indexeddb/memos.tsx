import Dexie from "dexie";

// IndexedDBに保存するデータの型定義
export interface MemoRecord{
  datetime:string
  title:string
  text:string
}

const database = new Dexie('markdown-editor') // Dexieインスタンス生成
database.version(1).stores({memos: '&datatime'})
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async(title:string, text:string): Promise<void> => {
  const datetime = new Date().toISOString()
  await memos.put({datetime, title, text})
}
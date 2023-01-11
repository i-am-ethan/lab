try{
  console.log('tryの中')
  noExistingFunction();
} catch(error) {
  console.error('エラーです')
  console.error('エラータイプ:'+error.name)
  console.error('エラーメッセージ:'+error.message)
}finally{
  console.log('処理後の記述')
}
;(async () => {
  const utter = new SpeechSynthesisUtterance()
  utter.lang = 'ja-JP'
  const response = await fetch('https://atdym.feelmy.net/add', {
    method: 'POST',
    body: JSON.stringify({
      user: `${props.list[0].user}`,
      url: document.location.href,
      title: document.title || document.location.href,
    }),
  })
  if (response.status === 200) {
    utter.text = '後で読むに追加しました'
    window.speechSynthesis.speak(utter)
  } else {
    utter.text = '後で読むに追加できませんでした'
    window.speechSynthesis.speak(utter)
  }
})()

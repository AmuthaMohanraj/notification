const push=require('web-push');

const vapiKeys={
  publicKey: 'BMGJuLXrCFcWC4yE6u4g-WInsdAUez9U53V7LGbzQaBvW4rPQ_7nJa_R6OcOVkCSe6gQP7qic4ewkb84uAB8xZI',
  privateKey: 'Y4K1kqPgjYkQBEaDk7E2NqMJ_8twE6E2bx3PXZrYa90'
} 

push.setVapidDetails('mailto:',vapiKeys.publicKey,vapiKeys.privateKey)

let sub={}
push.sendNotification(sub,'test message')
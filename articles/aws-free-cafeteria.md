---
title: "AWS０円食堂"
emoji: "🍚"
type: "idea"
topics: ["aws", "cloud", "cost"]
published: true
---

## 概要 Always Free Services
AWSにはサインアップ後の１２ヶ月間に無料で利用できるFree Tierサービスとは別に、毎月上限までは常時無料で利用できるAlways Free Services という枠もあります。「AWS0円食堂」では、常時無料枠を活用してどこまで表現できるか実践していきます。

## 実践
AWSのAlways Freeのサービス群を活用して構築した、AWS Cloud Practitionerの模擬試験アプリです。S3は常時無料枠に含まれていないため使わず、Lambdaでページを都度生成するサーバサイド・レンダリング(SSR)となります。DBはDynamoDB、CloudFrontは一度作ったページ内容のキャッシュのために利用。CloudWatchでLambdaのリクエスト回数を監視し、上限に近づいたらアラーム→EventBridgeで、サービス遮断用Lambdaを実行しています。


https://dejshbjyunelo.cloudfront.net/

## 関連リンク（クラウド各サービスの常時無料枠まとめ）

0円にこだわるための各社のAlways Free Services(常設無料枠)のまとめ記事です。

AWS: https://zenn.dev/good_sleeper/articles/aws-always-free

Google Cloud: https://zenn.dev/good_sleeper/articles/gcp-always-free

Microsoft Azure: https://zenn.dev/good_sleeper/articles/azure-always-free

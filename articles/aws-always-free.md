---
title: "AWSの常時無料サービス一覧 (Always Free Services)"
emoji: "🟧"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料サービス 一覧 (Always Free Services)

Amazon Web Services の常時無料枠（Always Free Services）はアカウント作成後の12ヶ月間のみ利用できる無料枠（Free Tier）とは異なり、**一定の使用量までは期限なく無料**で利用できるサービス群です。完全に無制限で無料というわけではなく、各サービスごとに定められた無料枠を超えた場合は従量課金が発生します。

本記事では、AWS公式が公開している常時無料対象サービスを一覧で整理しています。個人開発・学習・コスト最適化の参考として活用してください。

👉 English version: https://zenn.dev/good_sleeper/articles/aws-always-free-en

## 💻 コンピューティング

### AWS Lambda

AWS Lambdaは、サーバーやクラスターを管理することなく、イベントに応答してコードを実行できるサーバーレスコンピューティングサービスです。例えば、S3バケットにファイルがアップロードされた際に画像のリサイズ処理を行ったり、API Gatewayと連携してHTTPリクエストに応じて動的なWebアプリケーションを構築したり、データベースの変更をトリガーに通知を送信するといった様々なユースケースで活用できます。コードの実行時間に応じて課金されるため、無駄なコストを削減し、開発に集中できるのが特徴です。

🔗 https://aws.amazon.com/jp/lambda/?did=ft_card2&trk=ft_lambda

<br><br>
## 🧱 データベース

### Amazon Aurora DSQL

Amazon Aurora DSQLは、必要に応じて自動的にスケールするサーバーレスな分散SQLデータベースであり、中断のない高可用性アプリケーションの構築に最適です。例えば、急激なトラフィック変動に対応する必要があるECサイトのバックエンドや、リアルタイムのデータ分析が求められるIoTプラットフォームなどでその能力を発揮します。データ量やトランザクションの増加に合わせて自動的にリソースが調整されるため、インフラ管理の負担を大幅に軽減し、開発者はアプリケーション開発に集中できます。このサービスは、高いパフォーマンスと可用性を両立させたい現代的なアプリケーション開発において、強力な基盤を提供します。

🔗 https://aws.amazon.com/jp/rds/aurora/dsql/?did=ft_card2&trk=ft_dsql

---

### Amazon DynamoDB

Amazon DynamoDBは、あらゆる規模で1桁ミリ秒のパフォーマンスを発揮する、サーバーレスでフルマネージドなNoSQLデータベースです。これにより、アプリケーションのデータストレージと取得を効率的に行うことができます。例えば、ゲームのリーダーボード、IoTデバイスからのリアルタイムデータ収集、またはセッション管理といった、高速でスケーラブルなデータアクセスが求められるユースケースに最適です。DynamoDBは、インフラストラクチャの管理をAWSに任せられるため、開発者はアプリケーションの開発に集中できます。

🔗 https://aws.amazon.com/jp/dynamodb/?did=ft_card2&trk=ft_dynamodb

---

### Amazon SimpleDB

Amazon SimpleDB は、プログラムから容易にアクセスできる、柔軟でスケーラブルな NoSQL データストアです。構造化されていない、または半構造化されたデータを格納・取得するのに最適で、ウェブサイトのメタデータ管理や、ゲームにおけるプレイヤーの進捗状況の記録、IoTデバイスからのデータ収集などに活用されています。データベース管理の専門知識が不要で、インフラストラクチャのプロビジョニングやサーバーのメンテナンスに煩わされることなく、アプリケーション開発に集中できます。

🔗 https://aws.amazon.com/jp/simpledb/?did=ft_card2&trk=ft_simpledb

<br><br>
## 🧩 アプリケーション統合

### Amazon EventBridge

Amazon EventBridgeは、AWSサービス、自社システム、SaaSアプリケーションを連携させ、イベント駆動型アーキテクチャを大規模に構築できるイベントバスサービスです。例えば、EC2インスタンスの起動や停止、S3バケットへのファイルアップロードといったAWSのイベントをトリガーに、Lambda関数を実行して自動でバックアップを作成したり、SNSトピックに通知を送信したりといった処理を自動化できます。また、カスタムイベントを定義して、複数のシステム間でイベントをルーティングし、複雑なワークフローを柔軟に実装することも可能です。これにより、システム間の疎結合化と俊敏性の向上を実現し、リアルタイムなデータ処理やインフラストラクチャの自動化を促進します。

🔗 https://aws.amazon.com/jp/eventbridge/?did=ft_card2&trk=ft_eventbridge

---

### Amazon SNS

Amazon Simple Notification Service（SNS）は、アプリケーションの起動、メッセージの配信、およびサーバーレスコンピューティングのイベント発行を可能にする、高速で柔軟な完全マネージド型のプッシュメッセージングサービスです。例えば、モバイルデバイスへのプッシュ通知、Eメール、SMSメッセージを多数の受信者に同時に送信する際に利用されます。これにより、システム障害発生時のアラート通知や、ユーザーへのプロモーション情報の配信など、さまざまなユースケースでリアルタイムな情報伝達を実現できます。

🔗 https://aws.amazon.com/jp/sns/?did=ft_card2&trk=ft_sns

---

### Amazon SQS

Amazon SQSは、アプリケーションコンポーネント間でやり取りされるメッセージを格納・管理するためのスケーラブルなキューサービスです。これにより、複数のシステムが非同期に連携し、処理の遅延や障害による影響を最小限に抑えることができます。例えば、ウェブサイトからの注文を受け付けた後、バックエンドの注文処理システムがSQSキューから注文メッセージを取得して処理する、といったユースケースで利用されます。これにより、システム間の負荷分散や、一部のシステムが一時的に利用できなくなっても他のシステムが停止しない、といった堅牢なアーキテクチャを構築できます。

🔗 https://aws.amazon.com/jp/sqs/?did=ft_card2&trk=ft_sqs

---

### Amazon SWF

Amazon Simple Workflow Service (SWF) は、クラウドアプリケーションの複雑なワークフローを管理し、タスクの実行順序や状態を確実に追跡できるサービスです。例えば、ECサイトでの注文処理において、決済、在庫確認、配送手配といった複数のステップを連携させ、いずれかのステップでエラーが発生した場合でも、自動的に再試行や通知を行い、処理全体が正常に完了するまで管理します。これにより、分散システムにおける信頼性と耐障害性の高いアプリケーション構築を支援します。

🔗 https://aws.amazon.com/jp/swf/?did=ft_card2&trk=ft_swf

---

### AWS Step Functions

AWS Step Functionsは、分散アプリケーションのコンポーネントを視覚的にオーケストレーションし、複雑なワークフローを構築・管理できるサービスです。例えば、マイクロサービス間の連携や、データ処理パイプラインの自動化、バッチ処理の実行順序制御などに活用できます。API呼び出し、Lambda関数、EC2インスタンスなど、様々なAWSサービスを組み合わせて、処理の流れを定義し、エラーハンドリングやリトライ処理も柔軟に実装できるため、信頼性の高いアプリケーション開発を支援します。

🔗 https://aws.amazon.com/jp/step-functions/?did=ft_card2&trk=ft_stepfunctions

<br><br>
## 🌐 ネットワーク

### Amazon CloudFront

Amazon CloudFrontは、世界中のエッジロケーションにコンテンツをキャッシュすることで、低レイテンシーかつ高速なデータ転送を実現し、エンドユーザーにウェブサイトやアプリケーションのコンテンツを効率的に配信するCDNサービスです。これにより、動画ストリーミングやゲーム、グローバルに展開するECサイトなどで、ユーザーは遅延なく快適な体験を得られます。オリジンサーバーへの負荷を軽減し、ウェブサイトのパフォーマンス向上とスケーラビリティ確保に貢献します。

🔗 https://aws.amazon.com/jp/cloudfront/?did=ft_card2&trk=ft_cloudfront

---

### Amazon Route 53

Amazon Route 53は、ウェブサイトやアプリケーションへのトラフィックを、インターネット上のどこからでもユーザーがアクセスしやすいように、ドメイン名とIPアドレスを結びつける役割を担う、高可用性とスケーラビリティに優れたクラウドDNSサービスです。例えば、グローバルに展開するアプリケーションのトラフィックを、ユーザーの地理的位置に応じて最も近いサーバーに誘導したり、障害発生時に自動的に別のサーバーに切り替えることで、サービス停止時間を最小限に抑えたりするユースケースで活用されます。これにより、ユーザーは常に快適なアクセス体験を得られ、ビジネスの継続性を確保することができます。

🔗 https://aws.amazon.com/jp/route53/?did=ft_card2&trk=ft_route53

<br><br>
## 🔐 セキュリティ

### Amazon Cognito

Amazon Cognitoは、Web・モバイルアプリケーション向けの、シンプルでセキュアなユーザーサインアップ、サインイン、およびアクセスコントロール機能を提供するサービスです。開発者は、ユーザー管理の基盤を自社で構築する手間を省き、アプリケーション開発に集中できます。例えば、ソーシャルログイン（Google, Facebookなど）の統合や、多要素認証（MFA）の実装を容易に行え、ユーザーは安全かつスムーズにサービスにアクセスできるようになります。これにより、カスタマイズ可能なUI/UXを提供しつつ、高いセキュリティレベルを維持することが可能です。

🔗 https://aws.amazon.com/jp/cognito/?did=ft_card2&trk=ft_cognito

---

### AWS Certificate Manager

AWS Certificate Manager (ACM) は、AWS、ハイブリッド、マルチクラウド環境で SSL/TLS 証明書のプロビジョニングと管理を簡素化するサービスです。ACM を利用することで、パブリック証明書を無料で取得・更新でき、Elastic Load Balancing (ELB) や Amazon CloudFront といった AWS のサービスと簡単に統合できます。これにより、Web サイトやアプリケーションの通信を暗号化し、セキュリティを強化するとともに、証明書管理の手間を大幅に削減できます。例えば、HTTPS 化された Web サイトの公開や、API ゲートウェイでの認証基盤として利用する際に、証明書の取得、更新、配置といった煩雑な作業から解放され、開発者は本来の業務に集中することが可能になります。

🔗 https://aws.amazon.com/jp/certificate-manager/?did=ft_card2&trk=ft_certmanager

---

### AWS Key Management Service

AWS Key Management Service（KMS）は、AWS上で保存されるデータを暗号化・保護するための鍵を簡単に作成、管理、利用できるマネージドサービスです。KMSを使用することで、Amazon S3、Amazon EBS、Amazon RDSなどのAWSサービスで保存されている機密性の高い情報を、強力な暗号化によって保護できます。例えば、顧客の個人情報や機密文書をS3に保存する際に、KMSで生成した暗号化鍵を利用することで、不正アクセスからデータを守ることが可能です。また、KMSは鍵の作成からローテーション、削除まで、ライフサイクル全体をAWSが管理するため、運用負荷を大幅に軽減し、セキュアなデータ管理を実現します。

🔗 https://aws.amazon.com/jp/kms/?did=ft_card2&trk=ft_kms

---

### AWS Resource Access Manager

AWS Resource Access Manager (RAM) は、AWS アカウント間や組織内で、EC2インスタンスやVPCなどのAWSリソースを安全かつ効率的に共有するためのサービスです。例えば、共通のVPCやデータベースを複数の開発チームや部門で共有したい場合、RAMを利用することで、個別にリソースを作成・管理する手間を省き、運用コストの削減にも繋がります。また、組織全体で承認済みのリソーステンプレートを共有することで、セキュリティポリシーの統一やガバナンスの強化にも貢献します。RAMにより、リソースの共有設定を一元管理し、必要なアカウントや組織単位にのみアクセス権限を付与することが可能です。

🔗 https://aws.amazon.com/jp/ram/?did=ft_card2&trk=ft_resourceaccess

---

### AWS Shield

AWS Shieldは、ネットワークセキュリティ設定を分析し、マネージドDDoS保護を提供することで、お客様のネットワークとアプリケーションを保護するサービスです。これにより、DDoS攻撃の脅威からビジネスを防御し、安定したサービス提供を実現します。例えば、ゲーム、金融、ECサイトなど、常に高い可用性が求められるサービスにおいて、予期せぬDDoS攻撃によるサービス停止リスクを低減するのに役立ちます。AWS Shield Standardは無料で利用でき、AWS Shield Advancedはより高度な保護、可視性、そして専門家によるサポートを提供します。

🔗 https://aws.amazon.com/jp/shield/?did=ft_card2&trk=ft_shield

---

### AWS WAF Bot Control

AWS WAF Bot Controlは、一般的なウェブボットの悪意のあるアクティビティからウェブアプリケーションを保護するマネージドサービスです。これにより、スクレイピング、アカウント乗っ取り、不正なコンテンツの投稿などのボットによる攻撃を自動的に検知・ブロックできます。例えば、ECサイトで商品情報を不当に収集するボットや、SNSでスパムアカウントを大量作成するボットなどからサイトを守りたい場合に活用できます。このサービスは、AWS WAFの既存のルールに加えて、ボットの識別と対策を強化し、ウェブサイトのパフォーマンスとセキュリティを向上させます。

🔗 https://aws.amazon.com/jp/waf/features/bot-control/?did=ft_card2&trk=ft_WAFbc

<br><br>
## 📊 データ分析

### Amazon DataZone

Amazon DataZoneは、組織内のあらゆる場所にあるデータを、ガバナンスを保ちながら容易に発見、アクセス、共有できるようにするサービスです。例えば、マーケティング担当者が営業データと連携してキャンペーン効果を分析したり、データサイエンティストが最新の顧客行動データを基に予測モデルを構築したりする際に活用できます。これにより、データサイロの解消とデータ主導の意思決定を加速させることができます。

🔗 https://aws.amazon.com/jp/datazone/?did=ft_card2&trk=ft_datazone

---

### Amazon OpenSearch Service

Amazon OpenSearch Serviceは、インタラクティブなログ分析、リアルタイムのアプリケーションモニタリング、ウェブサイト検索といった多様なユースケースを容易に実現できるマネージドサービスです。このサービスを利用することで、開発者やアナリストは、ElasticsearchとKibanaの機能を取り込んだOpenSearchを、インフラストラクチャの管理に煩わされることなく、迅速にデプロイし、スケーリングさせることができます。これにより、例えば、ウェブサイトのトラフィック分析や、アプリケーションのエラーログからの問題特定、さらにはECサイトの検索機能強化など、データに基づいた洞察をリアルタイムで得ることが可能になります。

🔗 https://aws.amazon.com/jp/opensearch-service/?did=ft_card2&trk=ft_opensearch

---

### AWS Glue

AWS Glueは、サーバーレスで利用できる、データ分析のためのETL（抽出・変換・ロード）サービスです。データカタログ機能により、S3やRDSなど多様なデータソースからメタデータを自動的に収集・整理し、データレイクやデータウェアハウスの構築を容易にします。このサービスを活用することで、例えばECサイトの購買履歴データを分析しやすい形式に変換し、マーケティング施策の立案に役立てるといったことが可能になります。開発者はインフラ管理から解放され、データ処理ロジックの開発に集中できます。

🔗 https://aws.amazon.com/jp/glue/?did=ft_card2&trk=ft_glue

<br><br>
## 🧠 AI

### Amazon Q Developer

Amazon Q Developer は、ソフトウェア開発のあらゆる段階を支援する、生成AI搭載の最も高機能なアシスタントです。コードの生成やレビュー、デバッグ、テストケースの作成、さらにAWSのインフラストラクチャ設定の自動化まで、開発者の生産性を劇的に向上させます。例えば、自然言語で「Node.jsでAPIサーバーを構築して」と指示すれば、必要なコードスニペットを生成し、AWS LambdaやAPI Gatewayとの連携方法まで提案してくれます。また、既存のコードベースの脆弱性を検知し、修正案を提示するといったセキュリティ強化の面でも活躍します。これにより、開発者はより創造的で付加価値の高い業務に集中できるようになります。

🔗 https://aws.amazon.com/jp/q/developer/?did=ft_card2&trk=ft_q

---

### AWS HealthLake

AWS HealthLakeは、ヘルスケアおよびライフサイエンス業界向けのマネージド型データレイクサービスであり、患者の医療記録などのヘルスデータを安全かつ効率的に保存、変換、分析することを可能にします。このサービスを利用することで、医療機関はHIPAAなどの規制に準拠した形で、散在する電子カルテ情報などを統合し、臨床意思決定支援や公衆衛生の監視、研究開発といったユースケースに活用することができます。HealthLakeは、FHIR (Fast Healthcare Interoperability Resources) 標準に準拠したデータフォーマットでデータを保存し、迅速なデータアクセスと分析を実現することで、医療の質向上やコスト削減に貢献します。

🔗 https://aws.amazon.com/jp/healthlake?did=ft_card2&trk=ft_healthlake

<br><br>
## 🛠️ 開発者ツール

### Amazon CodeCatalyst

Amazon CodeCatalystは、AWS上でアプリケーションを大規模かつ迅速に構築・配信するための統合開発環境です。開発者は、コードの作成からテスト、デプロイまで、アプリケーションライフサイクルのあらゆる段階を単一のプラットフォームで管理できます。例えば、新しいWebアプリケーションを開発する際に、IaC（Infrastructure as Code）によるインフラ構築、CI/CDパイプラインの設定、そして継続的なデプロイメントまでをCodeCatalyst上でシームレスに行えます。これにより、開発チームはインフラ管理の複雑さから解放され、より迅速に価値ある機能を顧客に提供できるようになります。

🔗 https://aws.amazon.com/jp/codecatalyst/?did=ft_card2&trk=ft_codecatalyst

---

### AWS CodeArtifact

AWS CodeArtifactは、ソフトウェア開発において、組織が安全でスケーラブル、そしてコスト効率よくパッケージを管理できるマネージド型のアーティファクトリポジトリサービスです。これにより、社内ライブラリやサードパーティ製パッケージを統合し、開発チーム間での共有や、CI/CDパイプラインでの利用を容易にします。例えば、自社開発した共通モジュールをCodeArtifactに格納し、複数のプロジェクトで再利用することで、開発効率を向上させることができます。また、公開リポジトリへの依存関係をCodeArtifact経由で管理することで、セキュリティリスクの低減や、不要な依存関係の排除に役立ちます。

🔗 https://aws.amazon.com/jp/codeartifact/?did=ft_card2&trk=ft_codeartifact

---

### AWS CodePipeline

AWS CodePipelineは、ソースコードの変更から本番環境へのデプロイまで、アプリケーションのリリースプロセス全体を自動化し、迅速かつ信頼性の高いソフトウェア配信を実現する継続的デリバリーサービスです。例えば、開発者がコードをGitリポジトリにプッシュするだけで、CodePipelineが自動的にコードのビルド、テスト、そしてステージングや本番環境へのデプロイまでを一連の流れで実行します。これにより、手動での複雑な作業が不要になり、変更の頻度と品質を向上させることができます。

🔗 https://aws.amazon.com/jp/codepipeline/?did=ft_card2&trk=ft_codepipeline

<br><br>
## 🏛️ 管理とガバナンス

### Amazon CloudWatch

Amazon CloudWatchは、AWSのクラウド上のリソースやアプリケーションの状態を収集・監視・分析し、運用上の問題を迅速に発見・解決するためのサービスです。例えば、EC2インスタンスのCPU使用率が急増した場合にアラームを発報させ、自動的にインスタンスをスケールアップしたり、Lambda関数の実行エラーを検知して開発者に通知したりといった活用ができます。これにより、システムのパフォーマンスを最適化し、障害発生時の影響を最小限に抑えることが可能です。

🔗 https://aws.amazon.com/jp/cloudwatch/?did=ft_card2&trk=ft_cloudwatch

---

### Amazon Managed Service for Prometheus

Amazon Managed Service for Prometheus (AMP) は、Prometheus 互換のマネージドサービスであり、コンテナ化されたアプリケーションやインフラストラクチャのパフォーマンスを効率的に監視し、異常を検知してアラートを発報できます。このサービスを利用することで、Prometheus サーバーの運用管理が不要になり、Kubernetes 環境でのマイクロサービス運用におけるメトリクス収集、保存、分析を容易に行うことができます。例えば、クラスター全体の CPU 使用率やメモリ消費量の把握、アプリケーションごとのリクエストレイテンシの追跡、あるいは特定のエラーレートのしきい値を超えた場合に通知を受け取るといったユースケースで、システムの安定稼働と迅速な問題解決に貢献します。

🔗 https://aws.amazon.com/jp/prometheus/?did=ft_card2&trk=ft_msfp

---

### AWS CloudFormation

AWS CloudFormationは、インフラストラクチャをコードで管理し、AWSリソースの作成、設定、更新を自動化できるサービスです。これにより、手作業によるミスを減らし、インフラストラクチャのデプロイメントを迅速かつ再現性高く行うことができます。例えば、開発環境の迅速な構築、本番環境の災害復旧準備、あるいは設定の一貫性を保ちたい場合に、CloudFormationテンプレートを作成しておけば、数クリックで意図した状態のインフラを再現できます。これにより、インフラ管理の効率化と、コンプライアンスの遵守、そして問題発生時の迅速なトラブルシューティングを実現します。

🔗 https://aws.amazon.com/jp/cloudformation/?did=ft_card2&trk=ft_cloudformation

---

### AWS CloudTrail

AWS CloudTrailは、AWSアカウントで行われた操作を記録し、監査証跡として利用できるサービスです。これにより、誰が、いつ、どのリソースに対してどのような操作を行ったかを把握でき、セキュリティインシデントの調査やコンプライアンス遵守、運用上の問題特定に役立ちます。例えば、意図しない設定変更があった場合に、その変更を行ったユーザーやタイミングを特定し、迅速な復旧や再発防止策を講じることができます。また、AWS Configと連携させることで、リソース構成の変更履歴を継続的に管理することも可能です。

🔗 https://aws.amazon.com/jp/cloudtrail/?did=ft_card2&trk=ft_cloudtrail

---

### AWS Control Tower

AWS Control Towerは、セキュアで統制の取れたマルチアカウントAWS環境を素早く構築・管理できるサービスです。AWS Organizations、AWS IAM Identity Center、AWS Config、AWS CloudTrailなどのサービスを連携させ、アカウント作成からガバナンス設定、セキュリティポリシーの適用までを自動化します。これにより、規制要件への準拠を維持しつつ、開発チームが迅速にAWSリソースを展開できる環境を提供します。例えば、複数の部門やプロジェクトごとにアカウントを分離し、それぞれのアクセス権限やセキュリティ設定を一元管理する際などに活用できます。

🔗 https://aws.amazon.com/jp/controltower/?did=ft_card2&trk=ft_controltower

---

### AWS License Manager

AWS License Managerは、Amazon Web Services (AWS) 上で、あるいはオンプレミス環境で利用するサードパーティ製ソフトウェアライセンスの管理、検出、およびレポート作成を自動化するサービスです。これにより、企業はライセンスのコンプライアンスを維持し、過剰なライセンス購入によるコスト増加を防ぐことができます。例えば、特定のAWSインスタンスタイプやリージョンでのみソフトウェアが使用されるようにルールを設定したり、ライセンスの利用状況を定期的に確認して、未使用のライセンスがないか監査したりすることが可能です。さらに、License Managerは、AWS Marketplaceで購入したライセンスだけでなく、BYOL（Bring Your Own License）ライセンスにも対応しており、複雑なライセンス管理を効率化し、コンプライアンスリスクを低減するのに役立ちます。

🔗 https://aws.amazon.com/jp/license-manager/?did=ft_card2&trk=ft_license-manager

---

### AWS re:Post

AWS re:Postは、AWSの技術的な疑問や問題を解決するために、AWSユーザー同士が質問し合い、回答し合うコミュニティ主導の質疑応答サービスです。例えば、特定のサービスの設定方法が分からない、エラーが発生して原因を特定できない、といった場合に、過去の類似事例を検索したり、直接質問を投稿して経験豊富なユーザーからのアドバイスを得ることができます。これにより、迅速な問題解決やベストプラクティスの学習、新たな知見の獲得が期待できます。

🔗 https://www.repost.aws/jp/?did=ft_card2&trk=ft_repost

---

### AWS Resource Explorer

AWS Resource Explorerは、AWSアカウント内のリソースをリージョンを横断して迅速に検索・発見できるサービスです。例えば、特定のタグが付与されたEC2インスタンスやS3バケットを探したい場合、Resource Explorerを使えば、複数のリージョンに分散していても一括で検索結果を得られます。これにより、リソースの棚卸しや、トラブルシューティング時の影響範囲特定、あるいは開発環境と本番環境のリソース管理の効率化に役立ちます。運用担当者や開発者が、自身が管理するリソースを素早く見つけ出し、管理対象を把握する上で非常に有効です。

🔗 https://aws.amazon.com/jp/resourceexplorer/?did=ft_card2&trk=ft_resourceexplorer

---

### AWS Service Catalog

AWS Service Catalog を利用することで、組織内で承認済みの IT サービス（アプリケーション、インフラストラクチャ、ミドルウェアなど）のカタログを作成・管理できます。これにより、ユーザーは予め定義された安全でコンプライアンスに準拠したテンプレートから、迅速かつ容易にサービスをプロビジョニングできるようになり、IT 部門の管理負荷を軽減し、開発チームの生産性を向上させることが可能です。例えば、新入社員向けの標準的な開発環境のセットアップや、特定のプロジェクトに必要なサーバー構成のデプロイメントなどを、セルフサービスで提供する際に役立ちます。

🔗 https://aws.amazon.com/jp/servicecatalog/?did=ft_card2&trk=ft_servicecatalog

---

### AWS Systems Manager

AWS Systems Managerは、複数のAWSサービスにまたがる運用データを集約し、AWSリソース全体で様々なタスクを自動化することで、運用管理を効率化するサービスです。例えば、パッチ適用や設定管理、インベントリ収集といった日常的な運用作業を自動化し、運用負荷を軽減できます。また、コマンド実行やスクリプト展開をリモートで行うことも可能で、インフラストラクチャの迅速な変更やトラブルシューティングに役立ちます。これにより、システム全体の可観測性を高め、セキュリティとコンプライアンスを維持しながら、より迅速で信頼性の高い運用を実現できます。

🔗 https://aws.amazon.com/jp/systems-manager/?did=ft_card2&trk=ft_systemsmanager

<br><br>
## ✈️ 移行

### AWS Application Discovery Service

AWS Application Discovery Service は、オンプレミス環境のアプリケーションやサーバーの現状を把握するためのサービスです。サーバーの仕様、パフォーマンス、実行中のプロセス、ネットワーク接続などの詳細な情報を自動的に収集し、AWSへの移行計画立案やコスト最適化に役立てます。例えば、既存のシステム構成を正確に把握して、必要なAWSリソースを特定したり、不要なサーバーやライセンスを洗い出してコスト削減に繋げたりといったユースケースで活用できます。これにより、データに基づいた確実な移行戦略を策定することが可能となります。

🔗 https://aws.amazon.com/jp/application-discovery/?did=ft_card2&trk=ft_appdiscovery

---

### AWS Migration Hub

AWS Migration Hubは、オンプレミスや他のクラウドからAWSへのアプリケーション移行プロセス全体を一元的に可視化・管理できるサービスです。これにより、移行対象のサーバーやアプリケーションの検出から、計画、実行、完了まで、各段階の進捗状況をリアルタイムで把握できます。例えば、多数のサーバーを段階的にAWSへ移行する際に、どのサーバーがどのフェーズにあるのか、移行のボトルネックはどこかなどを把握し、計画的な移行の実現を支援します。また、移行ステータスを関係者間で共有する際にも役立ちます。

🔗 https://aws.amazon.com/jp/migration-hub/?did=ft_card2&trk=ft_migrathub

---

### Migration Evaluator

Migration Evaluatorは、オンプレミス環境の資産をAWSへ移行する際の予測コストを迅速に把握できるサービスです。企業のIT部門が、現在オンプレミスで稼働しているサーバーやストレージなどの資産情報を入力することで、AWS移行後の運用コストを試算し、投資対効果を評価することが可能になります。これにより、移行計画の策定や、経営層への説明資料作成が効率化され、よりスムーズなクラウド移行の実現を支援します。

🔗 https://aws.amazon.com/jp/migration-evaluator/?did=ft_card2&trk=ft_migeval

<br><br>


    
   ## 関連記事：他クラウドの常時無料枠まとめ
   
   🌈 Google Cloud Platform の常時無料枠  
   👉 https://zenn.dev/good_sleeper/articles/gcp-always-free
   
   🟦 Microsoft Azure の常時無料枠 (Always Free Services)  
   👉 https://zenn.dev/good_sleeper/articles/azure-always-free
   
   
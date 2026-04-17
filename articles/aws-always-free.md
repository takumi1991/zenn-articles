---
title: "AWSの常時無料サービス一覧 (Always Free Services)"
emoji: "🟧"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料サービス 一覧 (Always Free Services)

## 💻 コンピューティング

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/lambda.png" width="20" style="display:block;margin:0;">
### AWS Lambda

AWS Lambdaは、サーバーのプロビジョニングや管理なしにコードを実行できるサーバーレスコンピューティングサービスです。特定のイベント、例えばS3バケットへのファイルアップロードやDynamoDBテーブルへのデータ変更などをトリガーとして、Python, Node.js, Javaなどの様々な言語で記述されたコードを自動的に実行できます。これにより、Webアプリケーションのバックエンド処理、データ処理パイプラインの構築、IoTデバイスからのデータ集約など、多様なユースケースでインフラ管理の手間を省き、開発に集中することが可能になります。

🔗 https://aws.amazon.com/jp/lambda/?did=ft_card2&trk=ft_lambda

<br><br>
## 🗄️ ストレージ

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/simpledb.png" width="20" style="display:block;margin:0;">
### Amazon SimpleDB

Amazon SimpleDB は、Webアプリケーションなどのデータ保存を容易にする、柔軟でスケーラブルな NoSQL データベースサービスです。データベース管理の複雑さを気にすることなく、構造化されたデータを保存、取得、クエリできます。例えば、ユーザープロフィール、商品カタログ、設定情報など、多様なユースケースで活用できます。SimpleDB は、面倒なインフラストラクチャの管理やパッチ適用、バックアップといった作業から解放されるため、開発者はアプリケーション開発そのものに集中できます。

🔗 https://aws.amazon.com/jp/simpledb/?did=ft_card2&trk=ft_simpledb

<br><br>
## 🧱 データベース

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/aurora.png" width="20" style="display:block;margin:0;">
### Amazon Aurora DSQL

Amazon Aurora DSQL は、高可用性とスケーラビリティが求められるアプリケーション向けに、毎秒 100 万トランザクション以上を処理できる最速のサーバーレス分散 SQL データベースです。自動スケーリング機能により、ワークロードの増減に合わせてデータベースの性能を自動的に調整するため、開発者はインフラ管理に煩わされることなく、アプリケーション開発に集中できます。たとえば、急激なトラフィック増加に対応する必要があるECサイトや、リアルタイムなデータ処理が不可欠なIoTプラットフォームなどに最適です。

🔗 https://aws.amazon.com/jp/rds/aurora/dsql/?did=ft_card2&trk=ft_dsql

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/dynamodb.png" width="20" style="display:block;margin:0;">
### Amazon DynamoDB

Amazon DynamoDBは、AWSが提供する、フルマネージドでスケーラブルなNoSQLデータベースサービスです。これにより、JSONドキュメントやキーバリュー形式でデータを保存・取得でき、アプリケーションのパフォーマンスや可用性を損なうことなく、トラフィックの増減に自動的に対応できます。ゲームのリーダーボード、IoTデバイスのデータ保存、リアルタイムのパーソナライゼーションなど、高スループットと低レイテンシーが求められる様々なユースケースで利用されています。サーバーの管理や運用から解放され、開発者はアプリケーション開発に集中できます。

🔗 https://aws.amazon.com/jp/dynamodb/?did=ft_card2&trk=ft_dynamodb

<br><br>
## 🧩 アプリケーション統合

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/eventbridge.png" width="20" style="display:block;margin:0;">
### Amazon EventBridge

Amazon EventBridgeは、AWSサービス、自社システム、SaaSアプリケーションを横断して、イベント駆動型アプリケーションを大規模に構築するためのサーバーレスイベントバスサービスです。これにより、アプリケーションのコンポーネントがイベントを送信、受信、フィルタリング、ルーティングできるようになり、システム間の連携が容易になります。例えば、S3バケットにファイルがアップロードされた際に、Lambda関数をトリガーしてデータを加工したり、EC2インスタンスのステータス変更を検知して通知を送信するといった、リアルタイムでの自動化や連携を実現できます。EventBridgeは、イベントソースとターゲットを疎結合に保ち、スケーラブルで堅牢なアーキテクチャの構築を支援します。

🔗 https://aws.amazon.com/jp/eventbridge/?did=ft_card2&trk=ft_eventbridge

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/sns.png" width="20" style="display:block;margin:0;">
### Amazon SNS

Amazon SNSは、アプリケーションからエンドポイントへのメッセージの送信を簡素化する、完全マネージド型のプッシュメッセージングサービスです。このサービスを利用することで、多数の購読者に同時にメッセージを配信したり、イベント発生時に自動で通知を送信したりすることが可能になります。例えば、ECサイトで注文が完了した際に顧客にSMSで通知を送ったり、IoTデバイスから送信されたデータを分析サービスに連携させたりするといった、多様なユースケースで活用されています。開発者はインフラストラクチャの管理に煩わされることなく、アプリケーションのロジックに集中できます。

🔗 https://aws.amazon.com/jp/sns/?did=ft_card2&trk=ft_sns

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/sqs.png" width="20" style="display:block;margin:0;">
### Amazon SQS

Amazon SQSは、アプリケーションコンポーネント間でやり取りされるメッセージを、信頼性が高くスケーラブルな方法で格納・管理できるマネージド型メッセージキューイングサービスです。これにより、異なるシステム間での非同期通信が可能となり、例えば、ウェブサーバーからバックエンドの処理システムへのタスクの依頼や、マイクロサービス間の疎結合な連携といったユースケースで、システム全体の可用性や拡張性を向上させることができます。メッセージの送信者と受信者を分離し、一時的な負荷の変動にも柔軟に対応できるため、堅牢なシステム設計に貢献します。

🔗 https://aws.amazon.com/jp/sqs/?did=ft_card2&trk=ft_sqs

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/swf.png" width="20" style="display:block;margin:0;">
### Amazon SWF

Amazon Simple Workflow Service (SWF) は、クラウドアプリケーションにおける複雑なワークフローの実行を調整し、その状態を管理するためのサービスです。例えば、複数のマイクロサービスが連携して処理を行うようなシナリオで、各タスクの実行順序を保証したり、失敗時のリトライ処理を自動化したりする際に役立ちます。これにより、開発者はタスクの実行状況を詳細に追跡・管理でき、信頼性の高い分散アプリケーションの構築が可能となります。

🔗 https://aws.amazon.com/jp/swf/?did=ft_card2&trk=ft_swf

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/step-functions.png" width="20" style="display:block;margin:0;">
### AWS Step Functions

AWS Step Functionsは、分散アプリケーションのコンポーネントを視覚的にワークフローとして定義し、実行を調整するサービスです。これにより、マイクロサービスやAWS Lambda関数、他のAWSサービスなどを組み合わせて、複雑なビジネスプロセスを容易に構築・管理できます。例えば、ECサイトでの注文処理において、在庫確認、決済処理、発送指示といった一連のステップをStep Functionsで定義することで、各処理の成功・失敗に応じた自動的な再試行やエラーハンドリングが可能になり、信頼性の高いシステムを構築できます。

🔗 https://aws.amazon.com/jp/step-functions/?did=ft_card2&trk=ft_stepfunctions

<br><br>
## 🌐 ネットワーク

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/cloudfront.png" width="20" style="display:block;margin:0;">
### Amazon CloudFront

Amazon CloudFrontは、世界中のエッジロケーションにコンテンツをキャッシュすることで、低レイテンシーかつ高速なデータ転送を実現するコンテンツデリバリーネットワーク（CDN）サービスです。これにより、ウェブサイトの画像や動画、アプリケーションのファイルなどを、エンドユーザーの所在地に近い場所から瞬時に配信できます。例えば、グローバルに展開するECサイトや動画配信サービスにおいて、ユーザー体験の向上に不可欠な役割を果たします。また、APIリクエストの高速化や、DDoS攻撃からの保護機能も提供し、セキュアで快適なデジタル体験を支えます。

🔗 https://aws.amazon.com/jp/cloudfront/?did=ft_card2&trk=ft_cloudfront

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/route-53.png" width="20" style="display:block;margin:0;">
### Amazon Route 53

Amazon Route 53 は、インターネット上のドメイン名とIPアドレスを紐づける、高可用性かつスケーラブルなクラウドDNSウェブサービスです。ウェブサイトやアプリケーションへのアクセスを、世界中のどこからでも正しく誘導する役割を担います。例えば、ECサイトのドメイン名を指定した際に、適切なサーバーに接続させることで、ユーザーはスムーズに商品ページにアクセスできます。また、トラフィックを複数のサーバーに分散させることで、負荷を軽減し、ウェブサイトの安定稼働を実現します。さらに、DNSレベルでのヘルスチェック機能も提供し、障害発生時には自動的にトラフィックを正常なサーバーへ切り替えることで、サービス停止時間を最小限に抑えます。

🔗 https://aws.amazon.com/jp/route53/?did=ft_card2&trk=ft_route53

<br><br>
## 🔐 セキュリティ

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/cognito.png" width="20" style="display:block;margin:0;">
### Amazon Cognito

Amazon Cognitoは、Webアプリケーションやモバイルアプリケーションに、ユーザーのサインアップ、サインイン、アクセス制御といったID管理機能を簡単かつ安全に組み込めるサービスです。開発者は、ユーザーディレクトリの構築や認証フローの実装といった複雑な作業をAWSに任せ、アプリケーション開発に集中できます。例えば、ソーシャルメディアアカウント（Google、Facebookなど）でのログイン機能の提供や、独自のアカウントシステムとの連携、さらにはAPI Gatewayと連携してAPIへのアクセスを保護するといったユースケースで活用されています。これにより、スケーラブルでセキュアなユーザー管理を迅速に実現できます。

🔗 https://aws.amazon.com/jp/cognito/?did=ft_card2&trk=ft_cognito

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/certificate-manager.png" width="20" style="display:block;margin:0;">
### AWS Certificate Manager

AWS Certificate Manager (ACM) は、AWS、ハイブリッド、マルチクラウド環境のワークロードで利用する SSL/TLS 証明書のプロビジョニングと管理を簡素化するサービスです。ACM を利用することで、証明書の取得、更新、デプロイといった煩雑な作業を自動化し、セキュリティを強化できます。例えば、Amazon CloudFront で配信するウェブサイトの SSL 化、Elastic Load Balancing (ELB) のリスナーへの証明書適用、あるいはオンプレミスのサーバーで利用する証明書の管理など、多様なユースケースで活用できます。これにより、運用負担を軽減し、セキュアな通信環境の構築と維持を容易にします。

🔗 https://aws.amazon.com/jp/certificate-manager/?did=ft_card2&trk=ft_certmanager

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/kms.png" width="20" style="display:block;margin:0;">
### AWS Key Management Service

AWS Key Management Service (KMS) は、AWSサービスやアプリケーションでデータ暗号化を容易かつ安全に管理できるフルマネージドサービスです。KMSを使用することで、独自の暗号化キーを作成、管理、使用することができ、AWSの他のサービス（S3、EBS、RDSなど）と統合して、保存されているデータを自動的に暗号化できます。例えば、機密性の高い顧客情報をS3に保存する際にKMSのキーで暗号化することで、不正アクセスからデータを保護し、コンプライアンス要件を満たすことが可能です。また、KMSはキーの使用状況を詳細に記録するため、監査証跡としても機能します。

🔗 https://aws.amazon.com/jp/kms/?did=ft_card2&trk=ft_kms

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/resource-access-manager.png" width="20" style="display:block;margin:0;">
### AWS Resource Access Manager

AWS Resource Access Manager (RAM) は、AWS アカウント間や組織内で S3 バケット、VPC、Lambda 関数などの AWS リソースを安全かつ効率的に共有するためのサービスです。これにより、組織全体でリソースを再利用し、管理を簡素化することが可能になります。例えば、監査アカウントが複数の開発アカウントのログバケットにアクセスできるように設定したり、共通の VPC を組織内の全アカウントで利用できるようにしたりする際に活用できます。RAM を利用することで、リソースのコピーや設定の重複を防ぎ、セキュリティとガバナンスを強化できます。

🔗 https://aws.amazon.com/jp/ram/?did=ft_card2&trk=ft_resourceaccess

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/shield.png" width="20" style="display:block;margin:0;">
### AWS Shield

AWS Shieldは、DDoS攻撃からお客様のAWS上のアプリケーションを保護するマネージド型DDoS保護サービスです。ネットワークトラフィックを継続的に監視し、既知の攻撃パターンを自動的に検知・軽減することで、ウェブサイトやAPIなどの可用性を維持します。例えば、ゲームやeコマースサイトのように、常に高い可用性が求められるサービスにおいて、突然のトラフィック急増や悪意のある攻撃によるサービス停止を防ぐのに役立ちます。AWS Shield Advancedにアップグレードすれば、より高度な保護機能や、攻撃発生時の専門家によるサポートも利用可能です。

🔗 https://aws.amazon.com/jp/shield/?did=ft_card2&trk=ft_shield

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/waf.png" width="20" style="display:block;margin:0;">
### AWS WAF Bot Control

AWS WAF Bot Controlは、不正なウェブボットの活動を検知・ブロックすることで、ウェブアプリケーションを保護するマネージドサービスです。これにより、スクレイピング、アカウント乗っ取り、DDoS攻撃といった一般的なボットによる悪意あるアクセスからビジネスを守り、ユーザーエクスペリエンスを向上させます。例えば、ECサイトでの在庫枯渇を狙ったボットや、SNSでのスパム投稿を自動化するボットなどを効果的に排除できます。このサービスは、AWS WAFの既存のルールに加えて、ボットの挙動を分析・識別する高度な機能を提供し、設定や運用負荷を軽減しながら、ウェブサイトのセキュリティを強化します。

🔗 https://aws.amazon.com/jp/waf/features/bot-control/?did=ft_card2&trk=ft_WAFbc

<br><br>
## 📊 データ分析

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/datazone.png" width="20" style="display:block;margin:0;">
### Amazon DataZone

Amazon DataZoneは、組織内外のデータサイエンティストやアナリストが、アクセス許可を管理しつつ、容易にデータを見つけ、共有し、活用できるセルフサービス型のデータカタログおよびデータガバナンスサービスです。例えば、マーケティング部門が顧客データを分析する際に、個人情報保護の観点からアクセスを制限しつつ、分析に必要なデータセットをデータサイエンティストに提供するといったユースケースで、コンプライアンスを維持しながらデータ活用を促進します。これにより、サイロ化されがちなデータを統合し、組織全体のデータドリブンな意思決定を加速させることが可能になります。

🔗 https://aws.amazon.com/jp/datazone/?did=ft_card2&trk=ft_datazone

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/opensearch-service.png" width="20" style="display:block;margin:0;">
### Amazon OpenSearch Service

Amazon OpenSearch Service は、ログ分析、アプリケーションモニタリング、ウェブサイト検索などを容易に実現できるマネージドサービスです。このサービスを利用することで、膨大なログデータからリアルタイムにインサイトを抽出し、アプリケーションのパフォーマンスを継続的に監視することが可能になります。例えば、ウェブサイトの検索機能では、ユーザーが求める情報を迅速かつ正確に提供するために、OpenSearch の強力な検索能力が活用されます。また、システム障害発生時の原因究明や、ユーザー行動分析によるサービス改善にも役立ちます。AWS がインフラストラクチャの運用を管理するため、ユーザーは分析や監視に集中できます。

🔗 https://aws.amazon.com/jp/opensearch-service/?did=ft_card2&trk=ft_opensearch

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/glue.png" width="20" style="display:block;margin:0;">
### AWS Glue

AWS Glueは、ETL（Extract, Transform, Load）処理を容易にするサーバーレスなデータ統合サービスです。データカタログ機能により、多様なデータソースのメタデータを収集・管理し、データレイクやデータウェアハウスへのデータ準備を自動化します。例えば、S3に格納された非構造化データを分析可能な形式に変換し、Redshiftで分析するといったシナリオで活用されます。コードを書くことなく、GUI操作や自動生成されたコードでデータ変換ジョブを実行できるため、データエンジニアやアナリストの作業負担を大幅に軽減します。

🔗 https://aws.amazon.com/jp/glue/?did=ft_card2&trk=ft_glue

<br><br>
## 🧠 AI

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/q.png" width="20" style="display:block;margin:0;">
### Amazon Q Developer

Amazon Q Developerは、ソフトウェア開発のあらゆる段階で開発者の生産性を劇的に向上させる、生成AI搭載のインテリジェントアシスタントです。コードの生成やレビュー、デバッグ、セキュリティ脆弱性の特定、さらには既存のコードベースの理解を深め、リファクタリングを支援するなど、多岐にわたるタスクをこなします。例えば、新しい機能の実装に必要なコードスニペットの生成、複雑なバグの原因究明、AWSサービスの設定や利用方法に関する疑問の解消といった作業を迅速かつ正確に行うことで、開発者はより創造的で価値の高い業務に集中できるようになります。

🔗 https://aws.amazon.com/jp/q/developer/?did=ft_card2&trk=ft_q

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/healthlake.png" width="20" style="display:block;margin:0;">
### AWS HealthLake

AWS HealthLakeは、ヘルスケアおよびライフサイエンス分野の組織が、患者の健康記録などの機密性の高いヘルスデータを安全に保存、変換、取引、分析できるマネージドサービスです。このサービスを利用することで、組織はFHIR（Fast Healthcare Interoperability Resources）形式でデータを構造化し、容易にアクセス・分析できるようになるため、例えば、臨床研究の加速や、患者ケアの質向上に繋がる洞察の発見、さらにはリアルタイムでの疾患監視といったユースケースを実現できます。HealthLakeは、データの取り込みから分析までのプロセスを大幅に簡素化し、規制遵守を維持しながら、ヘルスケアのイノベーションを促進します。

🔗 https://aws.amazon.com/jp/healthlake?did=ft_card2&trk=ft_healthlake

<br><br>
## 🛠️ 開発者ツール

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/codecatalyst.png" width="20" style="display:block;margin:0;">
### Amazon CodeCatalyst

Amazon CodeCatalystは、AWS上でアプリケーションを大規模かつ迅速に構築・配信するための統合開発環境です。継続的インテグレーション（CI）と継続的デリバリー（CD）のワークフローを簡素化し、開発チームがコードの記述に集中できるよう支援します。例えば、新機能の迅速なリリース、デプロイメントパイプラインの自動化、開発環境の迅速なプロビジョニングといったユースケースで、開発ライフサイクルの加速に貢献します。

🔗 https://aws.amazon.com/jp/codecatalyst/?did=ft_card2&trk=ft_codecatalyst

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/codeartifact.png" width="20" style="display:block;margin:0;">
### AWS CodeArtifact

AWS CodeArtifactは、ソフトウェア開発における依存関係管理を効率化するマネージド型のアーティファクトリポジトリサービスです。Maven、npm、PyPIなどの主要なパッケージマネージャーに対応しており、開発チームは内部ライブラリやサードパーティ製パッケージをセキュアなリポジトリに集約・管理できます。これにより、ビルドの再現性を高め、依存関係の解決時間を短縮し、不正なパッケージの混入リスクを低減することが可能です。例えば、自社開発のライブラリをCodeArtifactに公開することで、複数のプロジェクトで安全かつ容易に再利用できるようになり、開発効率が向上します。

🔗 https://aws.amazon.com/jp/codeartifact/?did=ft_card2&trk=ft_codeartifact

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/codepipeline.png" width="20" style="display:block;margin:0;">
### AWS CodePipeline

AWS CodePipelineは、ソフトウェアのビルド、テスト、デプロイといったリリースプロセス全体を自動化し、継続的デリバリー（CD）を実現するサービスです。開発者はCodePipelineを設定することで、コードの変更を自動的に検知し、定義されたパイプラインに沿って一連のステージを順次実行させることができます。例えば、GitHubにコードをプッシュすると、CodePipelineがそれを検知してCodeBuildでビルドとテストを実行し、成功すればCodeDeployを使ってEC2インスタンスやLambda関数へ自動的にデプロイするといったワークフローを構築できます。これにより、手作業によるミスを減らし、より迅速かつ信頼性の高いソフトウェアリリースが可能になります。

🔗 https://aws.amazon.com/jp/codepipeline/?did=ft_card2&trk=ft_codepipeline

<br><br>
## 🏛️ 管理とガバナンス

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/cloudwatch.png" width="20" style="display:block;margin:0;">
### Amazon CloudWatch

Amazon CloudWatchは、AWSのクラウドリソースとアプリケーションのパフォーマンスを包括的に監視するためのサービスです。EC2インスタンスのCPU使用率やディスクI/O、Lambda関数の実行回数やエラー率などのメトリクスを収集・追跡し、異常を検知した際にはアラームを設定して通知することができます。これにより、システム障害の早期発見やパフォーマンスチューニング、リソース使用状況の把握などが可能となり、例えばウェブサイトへのトラフィック急増時に自動的にEC2インスタンスをスケールアウトさせるような運用を実現できます。また、アプリケーションのログを収集・分析してデバッグやトラブルシューティングに活用することもできます。

🔗 https://aws.amazon.com/jp/cloudwatch/?did=ft_card2&trk=ft_cloudwatch

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/managed-service-for-prometheus.png" width="20" style="display:block;margin:0;">
### Amazon Managed Service for Prometheus

Amazon Managed Service for Prometheusは、Prometheus互換のフルマネージドサービスとして、コンテナ化されたアプリケーションのメトリクス収集、保存、クエリ、アラート設定を簡素化します。これにより、Kubernetesクラスターなどの動的な環境で運用されるアプリケーションのパフォーマンス監視や異常検知が容易になり、開発チームはインフラ管理の負担なく、アプリケーションの健全性維持に集中できます。例えば、マイクロサービスアーキテクチャにおいて、各サービスのCPU使用率やリクエストレイテンシなどを継続的に監視し、問題発生時には迅速にアラートを発報することで、サービス障害の早期発見と復旧に貢献します。

🔗 https://aws.amazon.com/jp/prometheus/?did=ft_card2&trk=ft_msfp

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/cloudformation.png" width="20" style="display:block;margin:0;">
### AWS CloudFormation

AWS CloudFormationは、JSONまたはYAML形式のテンプレートを用いて、AWSリソースのプロビジョニングと管理を自動化するサービスです。これにより、サーバー、データベース、ネットワークなどのインフラストラクチャをコードとして定義し、一貫性のある環境を迅速に展開・更新することが可能になります。例えば、本番環境、ステージング環境、開発環境など、複数の環境で同じ構成のAWSリソースを容易に作成・管理したい場合に役立ちます。また、インフラストラクチャの変更履歴を追跡し、必要に応じてロールバックできるため、運用の効率化と安定化に貢献します。

🔗 https://aws.amazon.com/jp/cloudformation/?did=ft_card2&trk=ft_cloudformation

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/cloudtrail.png" width="20" style="display:block;margin:0;">
### AWS CloudTrail

AWS CloudTrailは、AWSアカウント内のユーザーアクティビティとAPIコールを記録・追跡できるサービスです。これにより、誰がいつ、どのリソースに対してどのような操作を行ったかを把握できるため、セキュリティ監査やコンプライアンス対応、トラブルシューティングに役立ちます。例えば、意図しない設定変更の検知や、不正アクセスの調査、リソース使用状況の分析などに活用できます。

🔗 https://aws.amazon.com/jp/cloudtrail/?did=ft_card2&trk=ft_cloudtrail

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/control-tower.png" width="20" style="display:block;margin:0;">
### AWS Control Tower

AWS Control Towerは、セキュアで管理されたマルチアカウントAWS環境を迅速に構築・運用できるサービスです。組織全体でAWSリソースのガバナンスを確立し、セキュリティとコンプライアンス要件を満たすための基盤を提供します。例えば、新規プロジェクトごとにアカウントを分離し、中央集権的な管理と監査を可能にすることで、セキュリティインシデントのリスクを低減し、コスト管理を容易にするといったユースケースで活用されます。これにより、企業はAWSの利用を拡大する際に、セキュリティやガバナンスに関する複雑な設定に時間を費やすことなく、ビジネス価値の創出に集中できます。

🔗 https://aws.amazon.com/jp/controltower/?did=ft_card2&trk=ft_controltower

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/license-manager.png" width="20" style="display:block;margin:0;">
### AWS License Manager

AWS License Managerは、AWS環境やオンプレミス環境で利用するサードパーティ製ソフトウェアライセンスの管理、検出、およびレポーティングを自動化するサービスです。これにより、組織はソフトウェアライセンスのコンプライアンスを維持し、不必要なコストを削減できます。例えば、特定のインスタンスタイプやタグを持つEC2インスタンスで稼働するSQL Serverライセンスを自動的に追跡し、ライセンス違反が発生しそうな場合にアラートを送信する、といったユースケースで活用できます。また、ライセンスの購入状況と実際の使用状況を比較し、過剰なライセンス購入を防ぐための洞察を提供します。

🔗 https://aws.amazon.com/jp/license-manager/?did=ft_card2&trk=ft_license-manager

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/repost.png" width="20" style="display:block;margin:0;">
### AWS re:Post

AWS re:Postは、AWSの利用者が技術的な課題を解決するためのコミュニティ主導の質疑応答プラットフォームです。ここでは、AWSの専門家や経験豊富なユーザーに質問を投げかけ、回答を得ることができます。例えば、特定のサービスの設定方法が分からない場合や、エラーメッセージの原因を特定したい場合などに活用できます。また、過去の質問と回答を検索することで、同様の悩みを抱える他のユーザーがどのように解決したかを知ることもでき、学習やトラブルシューティングに役立ちます。

🔗 https://www.repost.aws/jp/?did=ft_card2&trk=ft_repost

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/resource-explorer.png" width="20" style="display:block;margin:0;">
### AWS Resource Explorer

AWS Resource Explorer は、AWS リージョン全体に散らばるリソースを効率的に検索・発見できるサービスです。例えば、特定のタグが付いた Amazon EC2 インスタンスや Amazon S3 バケットを素早く見つけたい場合に役立ちます。これにより、リソースの把握が容易になり、管理作業の時間を短縮し、誤ったリソースの操作を防ぐことができます。また、新しいメンバーがプロジェクトのリソースを把握する際にも、このサービスを活用することで、迅速なオンボーディングを支援できます。

🔗 https://aws.amazon.com/jp/resourceexplorer/?did=ft_card2&trk=ft_resourceexplorer

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/service-catalog.png" width="20" style="display:block;margin:0;">
### AWS Service Catalog

AWS Service Catalogは、組織内で承認済みのITサービス（Amazon EC2インスタンス、S3バケット、RDSデータベースなど）のカタログを作成・管理できるサービスです。これにより、ユーザーはIT部門が事前に定義し、承認したサービスのみを簡単にデプロイできるようになります。例えば、開発チームは必要に応じて標準化された開発環境を迅速にプロビジョニングでき、セキュリティチームはコンプライアンス要件を満たす構成のみが展開されることを保証できます。結果として、ITガバナンスを強化し、デプロイメントの迅速化と標準化を実現します。

🔗 https://aws.amazon.com/jp/servicecatalog/?did=ft_card2&trk=ft_servicecatalog

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/systems-manager.png" width="20" style="display:block;margin:0;">
### AWS Systems Manager

AWS Systems Managerは、AWSインフラストラクチャ全体の運用を効率化し、セキュリティとコンプライアンスを強化するサービスです。これにより、リソースの可視性を高め、運用に関するインサイトに基づいて改善を行うことが可能になります。例えば、パッチ適用や設定変更といった運用タスクを自動化し、多数のサーバー群に対して一貫した設定を適用できます。また、実行コマンド機能を使えば、リモートでコマンドを実行してトラブルシューティングを行ったり、インベントリ機能で各インスタンスのソフトウェアや設定情報を収集・管理したりすることも可能です。さらに、セキュアなセッション確立によるリモートアクセス管理や、リソースの依存関係を可視化する機能により、運用管理の複雑さを軽減し、より安全で効率的なシステム運用を実現します。

🔗 https://aws.amazon.com/jp/systems-manager/?did=ft_card2&trk=ft_systemsmanager

<br><br>
## ✈️ 移行

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/application-discovery-service.png" width="20" style="display:block;margin:0;">
### AWS Application Discovery Service

AWS Application Discovery Serviceは、オンプレミスのIT資産を棚卸し、アプリケーションの依存関係を可視化することで、AWSへの合理的な移行計画策定を支援するサービスです。例えば、多数のサーバーで構成される基幹システムをAWSへ移行する際に、どのサーバーがどのアプリケーションに紐づき、どのようなネットワーク通信が発生しているかを把握することで、移行漏れや移行後の予期せぬ障害を防ぎ、ダウンタイムを最小限に抑えることが可能になります。これにより、移行リスクを低減し、効率的かつ確実なクラウド移行を実現できます。

🔗 https://aws.amazon.com/jp/application-discovery/?did=ft_card2&trk=ft_appdiscovery

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/migration-hub.png" width="20" style="display:block;margin:0;">
### AWS Migration Hub

AWS Migration Hubは、オンプレミスからAWSへの、あるいはAWS内の異なる環境へのサーバー移行を、一元的に追跡・管理できるサービスです。これにより、組織は複数の移行プロジェクトの進捗状況を可視化し、移行計画の立案、実行、完了までの全体像を把握できます。例えば、データセンターの刷新やアプリケーションのモダナイゼーションに伴う大規模な移行において、各サーバーの移行ステータスや依存関係を横断的に確認することで、移行作業の遅延やリスクを早期に発見し、迅速な意思決定を支援します。Migration Hubは、TerraformなどのIaCツールとも連携し、効率的で確実なクラウド移行を実現するための強力な統合ハブとなります。

🔗 https://aws.amazon.com/jp/migration-hub/?did=ft_card2&trk=ft_migrathub

---

<img src="https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/migration-evaluator.png" width="20" style="display:block;margin:0;">
### Migration Evaluator

Migration Evaluator は、オンプレミス環境の資産を AWS で稼働させた場合の予測コストを迅速に把握できるサービスです。たとえば、既存のデータセンターにあるサーバーやアプリケーションの構成情報をインポートすることで、AWS 上での利用料金を試算し、TCO（総所有コスト）削減効果を可視化します。これにより、クラウド移行の検討段階において、予算策定や意思決定の迅速化に貢献します。IT部門は、このサービスを利用して、設備投資や運用コストの削減目標を設定し、移行計画を具体化することが可能です。

🔗 https://aws.amazon.com/jp/migration-evaluator/?did=ft_card2&trk=ft_migeval

<br><br>

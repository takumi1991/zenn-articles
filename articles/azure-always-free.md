---
title: "Azure常時無料サービス一覧(Always Free Services)"
emoji: "🟦"
type: "tech"
topics: ["azure", "cloud", "free-tier"]
published: true
---

# Azure常時無料サービス一覧

Azureには常時無料で利用できるサービスが多数存在しており、各サービス一定の上限までは課金されずに利用できます。
本記事ではカテゴリごとにそれらの常時無料サービスを整理しています。

👉 English version: https://zenn.dev/good_sleeper/articles/azure-always-free-en

## 🧠 AI + 機械学習

### Azure AI Search

Azure AI Searchは、あらゆるデータソースから情報を高速に検索できるサービスです。

大量の文書や製品カタログから、関連性の高い情報をすぐに見つけ出せます。

例えば、ECサイトで顧客が欲しい商品を素早く探せるように手助けできるでしょう。

このサービスを使えば、ユーザーは欲しい情報に簡単にたどり着けるようになります。

**毎月の上限：** サービスごとに 10,000 件のホスト ドキュメントと 3 つのインデックスを保存できる 50 MB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-search/

---

### Azure Language

Azure Language は、文章の意味を理解し、分析できるサービスです。自然言語処理の技術で、テキストから感情やキーワードを抽出できます。例えば、顧客からのフィードバックを分析し、製品改善のヒントを見つけられるでしょう。

**毎月の上限：** 5,000 テキスト レコード

🔗 https://azure.microsoft.com/ja-jp/products/ai-foundry/tools/language

---

### AI Bot Service

AI Bot Serviceは、対話型AIボットを簡単に作成・管理できるサービスです。質問に自動で回答するチャットボットなどを構築できるでしょう。例えば、Webサイトでよくある質問に答えるボットを作成できます。

**毎月の上限：** プレミアム チャネル メッセージ 10,000 件と無制限の標準チャネル メッセージ

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-bot-service/

---

### AI Immersive Reader

AI Immersive Readerは、文章を読みやすくするためのサービスです。文字の大きさを変えたり、行間を調整したりできます。例えば、外国語の文章を母国語に翻訳することも可能です。

**毎月の上限：** 300 万文字

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-immersive-reader/

---

### Face

顔の検出と分析を行うサービスです。写真から顔を特定し、年齢や性別、感情などを分析できる。顔認証システムや、写真の顔にスタンプを付けるアプリなどで利用できる。

**毎月の上限：** Free インスタンスの 30,000 トランザクション

🔗 https://azure.microsoft.com/ja-jp/products/cognitive-services/face/

---

### Machine Learning

Azure Machine Learningは、機械学習モデルを構築・トレーニング・デプロイできるクラウドサービスです。データサイエンティストや開発者がAIで問題を解決するのを助けます。例えば、顧客の行動を予測してパーソナライズされた体験を提供できるサービスです。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/machine-learning/

---

### Open Datasets

Open Datasetsは、公開されている様々なデータセットを簡単に利用できるサービスです。気象データや統計情報などを、分析や開発にそのまま使える形で提供します。例えば、地域ごとの人口統計データを地図上に表示するアプリケーションを作成できます。これにより、データを探す手間なく、すぐにアイデアを形にできるでしょう。

**毎月の上限：** 無料 (エグレスの料金が適用される場合あり)

🔗 https://azure.microsoft.com/ja-jp/products/open-datasets/

---

### Content Safety

Azure Content Safetyは、不快なコンテンツを検出してブロックするサービスです。悪意あるコメントや不適切な画像などを自動で判別できるため、安全なオンライン環境を保てます。例えば、ユーザー投稿コンテンツの審査に役立てられます。

**毎月の上限：** AKS クラスターの管理は無料です。ノードによって消費されるリソースに対して料金が発生します

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-content-safety/

<br><br>
## 📦 コンテナー

### Azure コンテナー ストレージ

Azureコンテナー ストレージは、コンテナー化されたアプリケーションに永続的なストレージを提供します。  これにより、データを失うことなくコンテナーを停止・再起動できます。  例えば、データベースをコンテナーで実行する際に、データの保存場所として利用できます。

**毎月の上限：** このサービスでは、ストレージ プール容量 5 TiB 未満のデプロイ向けに Free レベルが提供されます

🔗 https://azure.microsoft.com/ja-jp/products/container-storage/

---

### Azure Kubernetes Service (AKS)

Azure Kubernetes Service (AKS)は、コンテナ化されたアプリケーションを簡単にデプロイ・管理できるサービスです。  Kubernetesクラスターの構築・運用を自動化します。  例えば、Webアプリケーションを多数展開して、負荷に応じて自動で数を調整できる。

**毎月の上限：** AKS クラスターの管理は無料です。ノードによって消費されるリソースに対して料金が発生する

🔗 https://azure.microsoft.com/ja-jp/products/kubernetes-service/

---

### Container Apps

Azure Container Appsは、コンテナ化されたアプリケーションを簡単に実行できるサービスです。コードやインフラの管理をせずに、アプリケーションをデプロイして動かせます。例えば、Web APIやマイクロサービスを素早く構築・公開するのに役立ちます。

**毎月の上限：** 180,000 vCPU 秒、360,000 GiB 秒、200 万リクエスト

🔗 https://azure.microsoft.com/ja-jp/products/container-apps/

<br><br>
## 📊 分析

### Data Catalog

Data Catalogは、組織内のデータを検索して見つけるためのサービスです。

データ資産を登録・管理し、関係者が情報を共有して利用できるようになります。

例えば、マーケティング担当者は顧客データを素早く見つけて分析に役立てることができます。

**毎月の上限：** ユーザー数無制限

🔗 https://azure.microsoft.com/ja-jp/products/data-catalog/

---

### Data Factory

Data Factoryは、複数のデータソースからデータを集め、加工・変換して、目的の場所に移動させるサービスです。

このサービスを使えば、例えば、ウェブサイトのログデータを分析基盤に自動で取り込めます。

複雑なデータ連携作業を自動化し、データ処理の実行を計画・監視できるでしょう。

**毎月の上限：** 5 つの低頻度アクティビティ

🔗 https://azure.microsoft.com/ja-jp/products/data-factory/

<br><br>
## 🖥️ コンピューティング

### App Service

App Serviceは、WebアプリやAPIを簡単に作成、デプロイ、管理できるサービスです。コードをアップロードするだけで、インフラの準備は不要です。例えば、ブログサイトをすぐに公開できます。

**毎月の上限：** 最大 10 個の Web アプリまたは API アプリ、1 GB のストレージ、1 日あたり 1 時間

🔗 https://azure.microsoft.com/ja-jp/products/app-service/

---

### Azure VM Image Builder

Azure VM Image Builderは、カスタム仮想マシンイメージを自動で作成できるサービスです。OSやアプリケーション、設定をまとめて、いつでも展開できる状態にできます。これにより、開発環境やテスト環境の構築を素早く行えるようになります。例えば、最新のセキュリティパッチを適用したWindows Serverイメージを定期的に作成するといったことが可能です。

**毎月の上限：** VM Image Builder は無料のサービスです。構築時にデータ転送や有料の Azure サービスを利用すると、料金が発生する場合があります

🔗 https://azure.microsoft.com/ja-jp/products/image-builder/

---

### Batch

Azure Batchは、大量のコンピューティングワークロードを効率的に実行するサービスです。大量のデータを処理するために、パソコンをたくさん並べて動かすようなことができます。例えば、動画のエンコードや科学技術計算などに利用できます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/batch/

---

### Functions

Azure Functionsは、コードを書いて実行できるサービスです。イベントが発生したときに自動でコードが動き、サーバーの管理が不要で便利です。例えば、画像がアップロードされたら、その画像をサイズ変更する処理を実行できます。

**毎月の上限：** 100 万回のリクエスト

🔗 https://azure.microsoft.com/ja-jp/products/functions/

---

### Service Fabric

Service Fabricは、マイクロサービスやコンテナー化されたアプリケーションを構築、デプロイ、管理できるサービスです。信頼性の高いアプリケーションを、ステートフルなものも含む、簡単に開発できます。例えば、リアルタイムの顧客データ分析システムを構築できるサービスです。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/service-fabric/

<br><br>
## 🌎 Web

### Static Web Apps

Azure Static Web Appsは、静的コンテンツとAPIを簡単にデプロイできるサービスです。GitHubやAzure DevOpsと連携し、コード変更を検知して自動的にデプロイを行います。ポートフォリオサイトやブログの公開に便利です。

**毎月の上限：** サブスクリプションあたり 100 GBの帯域幅、2 つのカスタム ドメイン、アプリあたり 0.5 GB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/app-service/static/

---

### App Configuration

App Configuration は、アプリケーションの設定を外部で一元管理できるサービスです。これにより、コードを変更せずに設定値を変えられます。例えば、データベース接続文字列を切り替える際などに便利です。アプリケーションのデプロイ後も、素早く設定を変更できるため、運用が楽になります。

**毎月の上限：** 10 MB のストレージで 1 日あたり 1,000 件のリクエスト

🔗 https://azure.microsoft.com/ja-jp/products/app-configuration/

---

### Notification Hubs

Notification Hubsは、あらゆるプラットフォームやデバイスにプッシュ通知を送信できるサービスです。ユーザーの興味や属性に合わせて通知を絞り込み、効率的に届けられます。例えば、スポーツアプリで特定のチームの試合結果をプッシュ通知で知らせる、といった使い方ができるでしょう。

**毎月の上限：** 100 万件のプッシュ通知と無料の名前空間

🔗 https://azure.microsoft.com/ja-jp/products/notification-hubs/

---

### Azure SignalR Service

Azure SignalR Serviceは、リアルタイムの双方向通信をアプリケーションに簡単に追加できるサービスです。Webアプリケーションやモバイルアプリのユーザーに、最新の情報を瞬時にプッシュ通知できるため、チャットアプリケーションのようなリアルタイム性が必要な場面で活躍します。例えば、株価のリアルタイム表示や、オンラインゲームでのプレイヤー間の通信などに利用できるでしょう。

**毎月の上限：** ユニットあたり 20 の同時接続と 20,000 件のメッセージ

🔗 https://azure.microsoft.com/ja-jp/products/signalr-service/

<br><br>
## 🗄️ データベース

### Azure Cosmos DB

Azure Cosmos DBは、あらゆる規模のアプリケーションで利用できる、グローバル分散型のデータベースサービスです。高速な応答と高い可用性で、世界中のユーザーにデータを提供できます。例えば、ゲームのプレイヤーデータを保存するために利用できるデータベースです。

**毎月の上限：** 1,000 要求ユニット/秒のプロビジョニング済みスループット、25 GB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/cosmos-db/

---

### Azure Cosmos DB for MongoDB

Azure Cosmos DB for MongoDB は、MongoDB の API を使用して、グローバルに分散された NoSQL データベースを構築できるサービスです。既存の MongoDB アプリケーションをそのまま移行して、そのスケーラビリティとパフォーマンスを利用できます。例えば、IoT デバイスからの大量のデータをリアルタイムで処理するアプリケーションに最適です。

**毎月の上限：** 32 GB のストレージを備えた専用の MongoDB クラスター

🔗 https://azure.microsoft.com/ja-jp/products/cosmos-db/

---

### SQL Database

SQL Databaseは、データベースをクラウドで使えるようにするサービスです。

データを安全に保存・管理でき、ウェブサイトの会員情報管理などに使えます。

必要に応じて容量を増やせるので、データが増えても安心です。

**毎月の上限：** 最大 10 個のデータベースを、それぞれ 100,000 vCore 秒のサーバーレス レベルと 32 GB のストレージを利用可能

🔗 https://azure.microsoft.com/ja-jp/products/azure-sql/database/

<br><br>
## ✈️ 移行

### Database Migration Service

Database Migration Serviceは、オンプレミスや他のクラウドのデータベースをAzureへ安全かつ簡単へ移行するサービスです。データベースを停止することなく、最小限のダウンタイムで移行作業を進められます。例えば、SQL ServerからAzure SQL Databaseへの移行をスムーズに行えるようになります。

**毎月の上限：** 無料の Standard コンピューティング

🔗 https://azure.microsoft.com/ja-jp/products/database-migration/

---

### Azure Migrate

Azure Migrateは、オンプレミスのサーバーや仮想マシンをAzureへ移行するのを助けるサービスです。IT資産の現状を把握し、移行計画を立てるのに役立ちます。例えば、Windows ServerをAzure Virtual Machinesへ移行できます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/azure-migrate/

---

### Azure Storage Mover

Azure Storage Moverは、オンプレミスストレージからAzureストレージへデータを安全に移行できるサービスです。大量のデータを迅速かつ確実に移動でき、IT担当者の負担を軽減します。例えば、長年利用してきたファイルサーバーのデータをAzure Filesへ移行する際に役立ちます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/storage-mover#Azure-storage-mover

<br><br>
## 🛠️ 開発者ツール

### Azure Deployment Environments

Azure Deployment Environmentsは、開発チームに最新の本番環境を再現した開発環境を提供できるサービスです。このサービスを使うと、開発者はコードをデプロイする前に、本番と同じ場所でテストできるのです。例えば、新機能が本番環境でどのように動作するかを、開発中に正確に確認できます。これにより、本番環境での予期せぬ問題を減らし、開発プロセスをスムーズに進められるでしょう。

**毎月の上限：** Azure Deployment Environments は、現在、無料のサービスです。ただし、サービスを通じてデプロイされた環境に作成されるコンピューティング、ストレージ、ネットワークなどの他の Azure リソースに対しては料金が発生します

🔗 https://azure.microsoft.com/ja-jp/products/deployment-environments/

---

### DevTest Labs

DevTest Labsは、開発やテストに必要な環境を素早く作れるサービスです。目的の環境をすぐに用意して、作業を開始できます。これにより、開発者はテスト環境の準備に時間を取られず、コード開発に集中できるのです。例えば、頻繁に環境をリセットしたいテストシナリオで役立ちます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/devtest-lab/

---

### Visual Studio Code

Visual Studio Codeは、プログラミングで使うコードを書くための無料ツールです。コードを書きやすく、間違いを見つけやすくしてくれます。たくさんのプログラミング言語に対応しており、ウェブサイトの作成にも便利です。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/visual-studio-code/

<br><br>
## ⚙️ DevOps

### Azure DevOps

Azure DevOpsは、ソフトウェア開発の計画、コード管理、ビルド、テスト、デプロイまでをまとめて行えるサービスです。チームで協力してアプリケーションを作る際の作業をスムーズに進められます。例えば、新しい機能のアイデアを計画し、コードを書いて、自動でテストと公開まで完了させることが可能です。

**毎月の上限：** 5 人のユーザーと無制限のプライベート Git Repos

🔗 https://azure.microsoft.com/ja-jp/products/devops/

<br><br>
## 📁 ハイブリッド + マルチクラウド

### Azure Arc

Azure の管理とサービスを拡張します。

**毎月の上限：** Azure 外部のリソース向けの無料の Azure コントロール プレーン機能、Azure Arc 対応リソースの検索とインデックス作成する

🔗 https://azure.microsoft.com/ja-jp/products/azure-arc/

<br><br>
## 🔐 ID

### Azure Active Directory B2C

Azure Active Directory B2Cは、顧客向けのカスタムなID管理を構築できるサービスです。Webサイトやアプリにログイン機能を簡単に追加できるため、開発者はID管理に時間を費やす必要がありません。例えば、ECサイトで新規顧客がアカウントを作成する際の体験をスムーズにできます。これにより、利用者は手軽にサービスへアクセスできるでしょう。

**毎月の上限：** Azure Active Directory B2C で月間アクティブ ユーザー数 50,000 人

🔗 https://www.microsoft.com/ja-jp/security/business/identity-access/microsoft-entra-id

---

### Microsoft Entra ID (旧称 Azure AD)

Microsoft Entra IDは、企業などの組織で、人々がさまざまなアプリケーションやリソースに安全にアクセスできるようにするサービスです。アクセス権限の管理や、サインインのセキュリティ強化を行います。組織のメンバーが、例えば、社内システムへ一度のサインインでアクセスできるようになります。

**毎月の上限：** すべてのクラウド アプリへのシングル サインオン (SSO) を備えた 50,000 個の保存オブジェクト

🔗 https://www.microsoft.com/ja-jp/security/business/identity-access/microsoft-entra-id

<br><br>
## 🧩 統合

### API Management

ハイブリッド マルチクラウド プラットフォームを使用して、すべてのプラットフォームにわたって API を管理します。

**毎月の上限：** 従量課金レベルで毎月 100 万通話無料

🔗 https://azure.microsoft.com/ja-jp/products/api-management/

---

### Event Grid

Event Gridは、様々なAzureサービスやカスタムソースからのイベントを、登録されたエンドポイントにルーティングするサービスです。イベントが発生した際に、自動的に指定した処理を実行できます。例えば、ストレージに新しいファイルがアップロードされたら、そのファイルを別の場所へコピーする、といったことが実現できます。

**毎月の上限：** 1 か月あたり 100,000 件の操作

🔗 https://azure.microsoft.com/ja-jp/products/event-grid/

---

### Health Data Services

Health Data Servicesは、医療機関のデータを安全に保管・管理するサービスです。患者さんの検査結果や診療記録などを、統一された形式で一元管理できるのが特徴です。例えば、複数の病院にかかる患者さんの情報を、医療提供者間で共有するのに役立ちます。このサービスを利用することで、よりスムーズな医療連携が実現できるでしょう。

**毎月の上限：** 1 GB の構造化ストレージと BLOB ストレージ、50,000 件の API リクエスト、0.5 GB の変換操作、100,000 件のイベント

🔗 https://azure.microsoft.com/ja-jp/products/health-data-services/

---

### Logic Apps

Logic Appsは、さまざまなアプリケーションやサービスを自動で連携させるためのクラウドサービスです。簡単な操作で、繰り返しの作業を自動化するワークフローを作成できます。例えば、OneDriveに保存された新しいファイルを自動的にSharePointにコピーする設定ができます。これにより、手作業を減らし、業務をスムーズに進めることができます。

**毎月の上限：** 4,000 件の組み込みアクションと従量課金プラン

🔗 https://azure.microsoft.com/ja-jp/products/logic-apps/

---

### Web PubSub

Web PubSubは、Webアプリケーションにリアルタイムの双方向通信機能を追加するためのサービスです。これにより、ユーザーはサーバーからプッシュされる最新情報を受け取ったり、サーバーにメッセージを送信したりできます。例えば、チャットアプリケーションなどで、複数ユーザー間のリアルタイムなメッセージ交換を実現できます。

**毎月の上限：** 1 ユニットあたり 1 日 20,000 件のメッセージ、1 ユニットあたり 20 の同時接続 (最大 1 ユニット)

🔗 https://azure.microsoft.com/ja-jp/products/web-pubsub/

<br><br>
## 🌍 ネットワーク

### Azure Maps

Azure Mapsは、地図の表示や位置情報を扱うためのサービスです。位置情報を使ったアプリケーション開発を支援します。例えば、店舗の場所を地図上に表示できます。

**毎月の上限：** 特定のマッピングおよび位置情報分析機能のトランザクション数は 1,000 ～ 5,000 件

🔗 https://azure.microsoft.com/ja-jp/products/azure-maps/

---

### Bandwidth (データ転送)

Bandwidth (データ転送)は、Azure内のリソース間でデータをやり取りする際の通信量を管理するサービスです。

インターネットや他のクラウドサービスとの通信にも適用されます。

これにより、意図しない高額な請求を防ぎ、コストを把握できます。

例えば、仮想マシンからインターネットへ頻繁にデータを送信する場合に、その通信量を意識できます。

**毎月の上限：** 送信 100 GB

🔗 https://azure.microsoft.com/ja-jp/products/virtual-network/

---

### Network Watcher

Network Watcherは、Azureネットワークの監視とトラブルシューティングを助けるサービスです。

ネットワークのパフォーマンスや接続の問題を診断できます。

仮想マシンへの通信がブロックされている原因を特定するのに役立ちます。

ネットワークの健全性を確認し、問題解決を迅速に進めることができます。

**毎月の上限：** 1,000 件のチェック、10 件のテスト、10 件の接続メトリックを含む 5 GB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/network-watcher/

---

### Private Link

Private Linkは、Azureのサービスやオンプレミス環境のサービスへ、インターネットを経由せずに安全に接続できる機能です。これにより、仮想ネットワークから直接、プライベートな接続を確立できます。例えば、Azure SQL Databaseに、外部のネットワークからアクセスできないように設定できるのが特徴です。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/private-link/

---

### Virtual Network

Virtual Networkは、Azure内にプライベートなネットワーク環境を構築できるサービスです。これにより、Azure上の仮想マシンを安全に接続し、組織のオンプレミスネットワークと連携させることもできます。例えば、開発環境で仮想マシン同士を接続し、機密データを安全にやり取りできるネットワークを構築できます。

**毎月の上限：** 50 仮想ネットワーク

🔗 https://azure.microsoft.com/ja-jp/products/virtual-network/

<br><br>
## 📡 モノのインターネット (IoT)

### IoT Edge

クラウドのインテリジェンスと分析を IoT エッジ デバイスまで拡張します。

**毎月の上限：** 無料のオープンソース エッジ ランタイム

🔗 https://azure.microsoft.com/ja-jp/products/iot-edge/

---

### IoT Hub

IoT Hubは、IoTデバイスとクラウドを安全に接続し、双方向の通信を行うサービスです。デバイスから送信される大量のデータを収集・処理できます。家庭用エアコンの運転状況をリアルタイムで監視し、遠隔操作できるような場面で活用できます。

**毎月の上限：** 無料版では、1 日あたり 8,000 件のメッセージと 0.5 KB のメッセージ メーター サイズ

🔗 https://azure.microsoft.com/ja-jp/products/iot-hub/

<br><br>
## 📋 管理とガバナンス

### Advisor

Advisor は、Azure 環境の最適化を提案してくれるサービスです。リソースの無駄遣いを減らし、コスト削減につながるアドバイスを提供します。例えば、使用されていないリソースを特定して削除を促すことで、無駄な課金を防ぐことができます。

**毎月の上限：** 無制限

🔗 https://azure.microsoft.com/ja-jp/products/advisor/

---

### Automation

Azure Automationは、クラウドやオンプレミス環境のタスクを自動化するサービスです。仮想マシンの起動・停止やパッチ適用などを自動化し、手作業を減らせます。定期的なサーバーの再起動も自動実行できるため、運用負担を軽減できます。

**毎月の上限：** 500 分のジョブ実行時間

🔗 https://azure.microsoft.com/ja-jp/products/automation/

---

### Azure Automanage

Azure Automanageは、Azure仮想マシンの運用を自動化するサービスです。定期的で手動のタスクを自動化し、保守作業を減らせます。例えば、OSの更新や構成管理を自動実行できます。これにより、管理者の負担を大幅に軽減できるのです。

**毎月の上限：** Automanage 固有の料金は発生しません。Automanage を通じてオンボードされた Azure サービスは、個別に課金されます

🔗 https://azure.microsoft.com/ja-jp/products/azure-automanage/

---

### Azure Lighthouse

Azure Lighthouseは、複数のAzureテナントをまとめて管理するためのサービスです。これにより、請負業者やマネージドサービスプロバイダーは、顧客のAzure環境を中央から管理できます。例えば、顧客の仮想マシンの更新をまとめて実行できます。Azure Lighthouseは、委任されたリソースの監視や管理を容易にします。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/azure-lighthouse/

---

### Azure Managed Applications、サービス カタログ

承認されたクラウド オファリングのカタログを使用して、サービスを取得しやすくなります。

**毎月の上限：** 無料公開

🔗 https://azure.microsoft.com/ja-jp/products/managed-applications/

---

### Azure Policy

Azure Policyは、Azureリソースのコンプライアンスを管理できるサービスです。

リソースの作成や変更を制限し、組織の標準や規則を適用できる。

例えば、特定のリージョン外へのリソース作成を禁止できる。

これにより、環境全体の設定を管理できる。

**毎月の上限：** 構成および変更追跡機能への無料アクセス

🔗 https://azure.microsoft.com/ja-jp/products/azure-policy/

---

### Azure Resource Mover

Azure Resource Moverは、Azureリソースを別のAzureリージョンへ安全に移動できるサービスです。これにより、災害対策やコンプライアンス要件に対応できます。例えば、東京リージョンの仮想マシンを大阪リージョンへ移す作業を支援します。

**毎月の上限：** 無料 (イングレスとエグレスの料金が適用される場合があります)

🔗 https://azure.microsoft.com/ja-jp/products/resource-mover/

---

### Azure Update Manager

Azure Update Managerは、Azure仮想マシンやオンプレミスサーバーの更新プログラムを管理できるサービスです。OSの更新やセキュリティパッチの適用を自動化し、サーバーの安全性を保ちます。例えば、Windows Serverの月例更新を対象サーバーに一括適用できるため、管理者の負担を減らせます。

**毎月の上限：** Azure リソースは無料 (Arc 対応サーバーは課金対象) です。詳細は価格ページをご覧ください

🔗 https://azure.microsoft.com/ja-jp/products/azure-update-management-center/

---

### Cloud Shell

Cloud Shellは、ブラウザからAzureリソースを管理できるコマンドライン環境です。BashまたはPowerShellで利用でき、Azure CLIやAzure PowerShellなどのツールがプリインストールされています。例えば、仮想マシンの起動や停止などを簡単に行えます。

**毎月の上限：** Azure Files での 12 か月間 5 GB の無料ストレージ

🔗 https://azure.microsoft.com/ja-jp/get-started/azure-portal/cloud-shell/

---

### Cost Management

透明性、正確性、効率性を備え、クラウド コストを監視、割り当て、最適化します。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/cost-management/

---

### Monitor

アプリケーション、インフラストラクチャ、ネットワークを完全に監視します。

**毎月の上限：** 機能ごとの無料利用額については、Azure Monitor の料金詳細を参照する

🔗 https://azure.microsoft.com/ja-jp/products/monitor/

---

### Resource Manager

Azure Resource Managerは、Azureリソースの作成、管理、更新を行うサービスです。デプロイメントテンプレートを使って、リソースをまとめて構成できる。仮想マシンとストレージアカウントを同時に作成するのに便利です。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/get-started/azure-portal/resource-manager/

<br><br>
## 🛡️ セキュリティ

### Azure Attestation

Azure Attestationは、仮想マシンなどのハードウェアの真正性を証明するサービスです。

これにより、信頼できる環境でソフトウェアが実行されているか確認できます。

例えば、機密性の高いデータを扱う際に、そのデータが改ざんされていないかを保証できるでしょう。

安全なワークロードの実行を支援します。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/azure-attestation/

---

### Security Center

Azure Security Centerは、クラウドとオンプレミスのリソースを保護するための統合セキュリティ管理サービスです。セキュリティ体制を可視化し、脅威を検出して、それらに対応するための推奨事項を提供します。例えば、仮想マシンへの不正アクセスを検知し、対策を促すことができます。

**毎月の上限：** 無料のポリシー評価と推奨事項

🔗 https://azure.microsoft.com/ja-jp/products/defender-for-cloud/

<br><br>


## 関連記事

🌈 Google Cloud Platform の常時無料枠(Always Free Services)  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

🟧 AWS の常時無料枠(Always Free Services)
👉 https://zenn.dev/good_sleeper/articles/aws-always-free

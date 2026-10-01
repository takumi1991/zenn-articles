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

Azure AI Search は、あらゆるデータソースを横断して高速な検索機能を提供するサービスです。

大量の文書から特定の情報を素早く見つけ出すことに役立ちます。

例えば、顧客からの問い合わせ履歴を検索して、類似する過去の回答を探し出すことができます。

この機能により、求める情報へのアクセスが容易になります。

**毎月の上限：** サービスごとに 10,000 件のホスト ドキュメントと 3 つのインデックスを保存できる 50 MB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-search/

---

### Azure Language

Azure Languageは、自然言語を分析して意味を理解するためのサービスです。

テキストから意図を抽出し、感情を分析することで、顧客の声を把握できます。

例えば、製品レビューのテキストから、肯定的な意見と否定的な意見を自動で分類できます。

このサービスは、大量のテキストデータを分析する際に役立ちます。

**毎月の上限：** 5,000 テキスト レコード

🔗 https://azure.microsoft.com/ja-jp/products/ai-foundry/tools/language

---

### AI Bot Service

AI Bot Serviceは、対話型アプリケーションを構築するためのサービスです。顧客からの問い合わせに自動で回答するチャットボットを開発できます。例えば、ECサイトで商品に関する質問に答えるボットを導入できます。このサービスで、ユーザーとのコミュニケーションを改善しましょう。

**毎月の上限：** プレミアム チャネル メッセージ 10,000 件と無制限の標準チャネル メッセージ

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-bot-service/

---

### AI Immersive Reader

AI Immersive Readerは、文章を読む際の困難を解消するサービスです。文字の大きさを変えたり、行間を広げたりして、読みやすい表示に調整できます。例えば、学習者が教材を読む際に、集中して内容を理解する手助けをします。これにより、より多くの人が情報にアクセスできるようになります。

**毎月の上限：** 300 万文字

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-immersive-reader/

---

### Face

顔認識技術を使って、画像や動画から人の顔を検出・分析するサービスです。

写っている人物の年齢や性別、感情などを把握できます。

例えば、店舗の顧客層を分析する際に役立ちます。

開発者は、このサービスをアプリやシステムに組み込めます。

**毎月の上限：** Free インスタンスの 30,000 トランザクション

🔗 https://azure.microsoft.com/ja-jp/products/cognitive-services/face/

---

### Machine Learning

Azure Machine Learningは、機械学習モデルの構築、トレーニング、デプロイを支援するクラウドサービスです。データサイエンティストや開発者が、AIを活用したアプリケーションを開発できるようになります。例えば、顧客の行動を予測するレコメンデーションシステムを構築できます。これにより、ビジネスの成果向上に繋がります。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/machine-learning/

---

### Open Datasets

Open Datasetsは、世界中の公開データにアクセスできるサービスです。

気象データや人口統計データなどを分析に利用できます。

例えば、地域ごとの気温変動を調べるのに役立ちます。

これにより、新たな発見や洞察を得る手助けとなります。

**毎月の上限：** 無料 (エグレスの料金が適用される場合あり)

🔗 https://azure.microsoft.com/ja-jp/products/open-datasets/

---

### Content Safety

Content Safetyは、不適切または危険なコンテンツを自動で検出・ブロックするサービスです。

投稿されるテキストや画像、動画から暴力的な表現やヘイトスピーチを検知します。

例えば、オンラインフォーラムで不快なコメントが掲載されるのを防ぐために利用できます。

これにより、安全で快適なデジタル空間の維持に役立ちます。

**毎月の上限：** AKS クラスターの管理は無料です。ノードによって消費されるリソースに対して料金が発生します

🔗 https://azure.microsoft.com/ja-jp/products/ai-services/ai-content-safety/

<br><br>
## 📦 コンテナー

### Health Bot

Health Botは、健康に関する質問に自然な言葉で答えるAIチャットボットです。

症状を入力すると、考えられる病気や受診の目安を提示してくれます。

例えば、頭痛や発熱といった症状から、適切な診療科や応急処置を提案します。

個人の健康管理や、医療機関への相談前の一助として利用できます。

**毎月の上限：** 3,000 件のメッセージ (1 秒あたり最大 10 件のメッセージ)

🔗 https://azure.microsoft.com/ja-jp/products/bot-services/health-bot/

---

### Azure コンテナー ストレージ

Azureコンテナーインスタンスに高速なストレージを提供し、アプリケーションの性能を向上させるサービスです。データの一時保存や、コンテナー間でデータを共有する場面で役立ちます。例えば、ビッグデータ分析で大量のデータを処理する際の速度向上が期待できます。このストレージは、コンテナーの起動と連動して利用開始できるため、すぐに作業へ取り掛かれます。

**毎月の上限：** このサービスでは、ストレージ プール容量 5 TiB 未満のデプロイ向けに Free レベルが提供されます

🔗 https://azure.microsoft.com/ja-jp/products/container-storage/

---

### Azure Kubernetes Service (AKS)

Azure Kubernetes Service は、コンテナ化されたアプリケーションのデプロイと管理を容易にするサービスです。これにより、開発者はインフラストラクチャの管理に時間を費やすことなく、アプリケーションの開発に集中できます。例えば、Webアプリケーションの多数のインスタンスを自動的にスケールさせるのに役立ちます。また、サービスの可用性を高め、更新をスムーズに行えます。

**毎月の上限：** AKS クラスターの管理は無料です。ノードによって消費されるリソースに対して料金が発生する

🔗 https://azure.microsoft.com/ja-jp/products/kubernetes-service/

---

### Container Apps

コンテナー化されたアプリケーションを簡単に実行できるサービスです。コードをビルドしてデプロイするだけで、コンテナーアプリが自動的にスケールします。例えば、ウェブサイトのバックエンドAPIを素早く公開できます。インフラ管理の手間なく、アプリケーション開発に集中できます。

**毎月の上限：** 180,000 vCPU 秒、360,000 GiB 秒、200 万リクエスト

🔗 https://azure.microsoft.com/ja-jp/products/container-apps/

<br><br>
## 📊 分析

### Data Catalog

Data Catalog は、組織内のデータ資産を管理し、見つけやすくするサービスです。

このサービスを使うと、社員は必要なデータを簡単に見つけ、利用できます。

例えば、マーケティング担当者が過去のキャンペーンデータを分析する際、Data Catalog で関連データを素早く探し出せます。

これにより、データに基づいた意思決定をスムーズに行うことが可能になります。

**毎月の上限：** ユーザー数無制限

🔗 https://azure.microsoft.com/ja-jp/products/data-catalog/

---

### Data Factory

Data Factoryは、さまざまなデータソースからデータを集めて、必要な形に加工するサービスです。

様々な業務システムやクラウドストレージにあるデータを統合できます。

例えば、顧客の購入履歴を分析するために、ECサイトとCRMのデータを一つにまとめるのに使えます。

こうして、データを使った分析やレポート作成の準備を自動で行えます。

**毎月の上限：** 5 つの低頻度アクティビティ

🔗 https://azure.microsoft.com/ja-jp/products/data-factory/

<br><br>
## 🖥️ コンピューティング

### App Service

App Serviceは、WebアプリやAPIを簡単に作成、デプロイ、管理できるクラウドサービスです。  このサービスを使うと、WindowsやLinux上で動作するアプリケーションをホストできます。  例えば、顧客向けのオンラインストアのバックエンドAPIを構築・公開するのに役立ちます。  これにより、インフラ管理の手間を省き、開発に集中できます。

**毎月の上限：** 最大 10 個の Web アプリまたは API アプリ、1 GB のストレージ、1 日あたり 1 時間

🔗 https://azure.microsoft.com/ja-jp/products/app-service/

---

### Azure VM Image Builder

Azure VM Image Builderは、カスタマイズされた仮想マシンイメージを自動で作成するサービスです。このサービスを利用すると、必要なソフトウェアや設定が事前に組み込まれたイメージを効率的に準備できます。例えば、開発環境に特化したイメージを定期的に更新する作業が自動化できます。これにより、仮想マシン展開の準備にかかる時間を短縮できます。

**毎月の上限：** VM Image Builder は無料のサービスです。構築時にデータ転送や有料の Azure サービスを利用すると、料金が発生する場合があります

🔗 https://azure.microsoft.com/ja-jp/products/image-builder/

---

### Batch

Batchは、大規模なコンピューティング処理を安価に実行できるサービスです。

大量の動画ファイルをエンコードする作業を、計算リソースをまとめて処理できます。

必要な時に必要なだけコンピューティングパワーを確保し、コストを抑えられます。

開発者はプログラムの実行に集中し、インフラ管理の手間を省けます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/batch/

---

### Functions

Functionsは、コードを実行するたびにインフラを意識する必要がないコンピューティングサービスです。イベントが発生したときにコードを動かすことができます。例えば、写真がアップロードされたら、その写真のサイズを変更する処理を実行できます。サーバーの管理をせずに、必要な時にだけコードを動かせるので便利です。

**毎月の上限：** 100 万回のリクエスト

🔗 https://azure.microsoft.com/ja-jp/products/functions/

---

### Service Fabric

Service Fabricは、マイクロサービスアプリケーションの構築と管理を可能にするシステムです。このサービスは、ステートフルおよびステートレスのマイクロサービスをデプロイしてスケーリングするのを助けます。例えば、リアルタイムの注文処理システムのような、高可用性と低遅延が求められるアプリケーションに適しています。Service Fabricは、アプリケーションのライフサイクル管理や、障害からの自動復旧機能を提供します。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/service-fabric/

<br><br>
## 🌎 Web

### Static Web Apps

Azure Static Web Appsは、Webアプリケーションを簡単にデプロイ・ホストできるサービスです。HTML、CSS、JavaScriptで作成した静的コンテンツと、API機能を提供するバックエンドを一体化して展開できます。例えば、イベント告知サイトやポートフォリオサイトの公開に適しています。GitHubやAzure DevOpsと連携し、コード変更を自動でデプロイします。

**毎月の上限：** サブスクリプションあたり 100 GBの帯域幅、2 つのカスタム ドメイン、アプリあたり 0.5 GB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/app-service/static/

---

### App Configuration

App Configurationは、アプリケーションの設定を一元管理するためのサービスです。  これにより、プログラムのコードを変更せずに設定値を更新できます。  例えば、Webアプリケーションの接続文字列を安全に管理できます。  設定の変更は即座に反映され、開発と運用がスムーズになります。

**毎月の上限：** 10 MB のストレージで 1 日あたり 1,000 件のリクエスト

🔗 https://azure.microsoft.com/ja-jp/products/app-configuration/

---

### Notification Hubs

Notification Hubsは、様々なプラットフォームへ一斉にプッシュ通知を送信できるサービスです。

モバイルアプリやウェブサイトのユーザーに、最新情報や更新通知を届けられます。

例えば、ゲームアプリで新しいイベントの開始を全ユーザーに知らせたい場合に役立ちます。

これにより、幅広いユーザー層へ効率良く情報を伝えることができます。

**毎月の上限：** 100 万件のプッシュ通知と無料の名前空間

🔗 https://azure.microsoft.com/ja-jp/products/notification-hubs/

---

### Azure SignalR Service

Azure SignalR Serviceは、リアルタイムの双方向通信をWebアプリケーションで実現するサービスです。

このサービスを使えば、チャットアプリやライブ通知といった機能が作れます。

サーバーからクライアントへ即座に情報を送ることができるため、ユーザー体験が向上します。

例えば、株価のリアルタイム更新表示などがこのサービスで実現できます。

**毎月の上限：** ユニットあたり 20 の同時接続と 20,000 件のメッセージ

🔗 https://azure.microsoft.com/ja-jp/products/signalr-service/

<br><br>
## 🗄️ データベース

### Azure Cosmos DB

Azure Cosmos DBは、様々なデータモデルに対応したグローバル分散データベースです。顧客の所在地に関わらず、低遅延でデータへアクセスできます。たとえば、世界中のユーザーにリアルタイムでコンテンツを配信するソーシャルメディアアプリケーションで使われます。あらゆる規模のアプリケーションで、高速かつ高可用なデータ管理を実現します。

**毎月の上限：** 1,000 要求ユニット/秒のプロビジョニング済みスループット、25 GB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/cosmos-db/

---

### Azure DocumentDB

Azure DocumentDBは、NoSQLデータベースとして、JSON形式のデータを管理し、迅速にアクセスできるサービスです。このサービスは、アプリケーションからのデータ保存や取得を高速化するように設計されています。例えば、IoTデバイスから送られてくる大量のセンサーデータをリアルタイムに保存・分析するのに役立ちます。また、構造が変化しやすいデータでも柔軟に対応し、開発をスムーズに進められます。

**毎月の上限：** 32 GB のストレージを備えた専用の MongoDB クラスター

🔗 https://azure.microsoft.com/ja-jp/products/documentdb

---

### Azure SQL Database

Azure SQL Databaseは、データベースをクラウドで管理できるサービスです。

このサービスを使うと、ウェブサイトの会員情報を保存できます。

データは自動でバックアップされ、安全に保管されます。

必要に応じてデータベースの大きさを変えることも可能です。

**毎月の上限：** 最大 10 個のデータベースを、それぞれ 100,000 vCore 秒のサーバーレス レベルと 32 GB のストレージを利用可能

🔗 https://azure.microsoft.com/ja-jp/products/azure-sql/database/

<br><br>
## ✈️ 移行

### Database Migration Service

Database Migration Serviceは、データベースをAzureへ移行する作業を自動化するサービスです。

さまざまなデータベースからAzure SQL DatabaseやAzure Database for PostgreSQLなどへ、スムーズにデータを移せます。

例えば、オンプレミスのSQL ServerからAzure SQL Databaseへ、ダウンタイムを最小限にして移行できます。

これにより、既存のデータベース資産をクラウドで活用できるようになります。

**毎月の上限：** 無料の Standard コンピューティング

🔗 https://azure.microsoft.com/ja-jp/products/database-migration/

---

### Azure Migrate

Azure Migrateは、オンプレミス環境のサーバーやデータベースをAzureに移行するためのサービスです。

このサービスを使うと、現状のIT資産を評価し、Azureへの移行計画を立てられます。

例えば、古いWindows ServerをAzure上の仮想マシンに置き換える作業を支援します。

移行後の運用管理もAzureの機能でまとめて行えます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/azure-migrate/

---

### Azure Storage Mover

Azure Storage Moverは、オンプレミス環境からAzureストレージへのデータ移行を自動化するサービスです。

このサービスは、多数のファイルを高速かつ安全にAzureへ移動させるのに役立ちます。

例えば、画像や動画ファイルを大量にクラウドへ移す場合に利用できます。

これにより、ストレージ管理の手間を減らし、データアクセスの利便性を向上させます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/storage-mover#Azure-storage-mover

<br><br>
## 🛠️ 開発者ツール

### Azure Deployment Environments

Azure Deployment Environmentsは、開発チームがアプリケーションを迅速に展開できる仮想環境を提供します。このサービスを利用することで、開発者はコードのテストやデバッグを安全な分離された空間で行えます。例えば、新しい機能のリリース前に、本番環境と似た条件で動作確認が可能です。これにより、開発サイクルの短縮と品質向上に貢献します。

**毎月の上限：** Azure Deployment Environments は、現在、無料のサービスです。ただし、サービスを通じてデプロイされた環境に作成されるコンピューティング、ストレージ、ネットワークなどの他の Azure リソースに対しては料金が発生します

🔗 https://azure.microsoft.com/ja-jp/products/deployment-environments/

---

### DevTest Labs

DevTest Labsは、開発やテストに必要な環境を素早く構築・管理できるサービスです。  これにより、チームメンバーはすぐに作業を開始でき、無駄な待ち時間を削減できます。  例えば、新しい機能のデモ環境を数時間で用意できます。  不要になった環境は自動的に削除され、コストを節約できます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/devtest-lab/

---

### Visual Studio Code

Visual Studio Codeは、コードを書くための無料のプログラムです。

このソフトで、ウェブサイトやアプリを作るために必要なプログラムの文章を書き直したり、新しい文章を作ったりできます。

例えば、Pythonという言葉で動くプログラムの計算間違いを探して直すことができます。

世界中の多くの人が、このソフトを使って色々なものを作っています。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/visual-studio-code/

<br><br>
## ⚙️ DevOps

### Azure DevOps

Azure DevOpsは、ソフトウェア開発の計画、コード作成、ビルド、テスト、デプロイまでを一股して進めるためのサービスです。チームで協力してアプリを開発する際に、作業を整理し、進捗を共有するのに役立ちます。例えば、新しい機能のアイデアから完成まで、開発の全工程をこのサービスで管理できます。これにより、チーム全員が同じ情報を見て、スムーズに作業を進められます。

**毎月の上限：** 5 人のユーザーと無制限のプライベート Git Repos

🔗 https://azure.microsoft.com/ja-jp/products/devops/

<br><br>
## 📁 ハイブリッド + マルチクラウド

### Azure Arc

Azure Arcは、オンプレミスや他のクラウド環境にあるリソースをAzureで管理できるようにするサービスです。これにより、どこにあるサーバーでもAzureの管理ツールやポリシーを適用できます。例えば、自社のデータセンターにあるWindowsサーバーをAzure Policyで一元管理できます。Azure Arcを使うと、ハイブリッド環境全体をまるでAzure上にあるかのように扱えます。

**毎月の上限：** Azure 外部のリソース向けの無料の Azure コントロール プレーン機能、Azure Arc 対応リソースの検索とインデックス作成する

🔗 https://azure.microsoft.com/ja-jp/products/azure-arc/

<br><br>
## 🔐 ID

### Azure Active Directory B2C

Azure Active Directory B2Cは、顧客向けのアプリケーションやWebサイトにサインアップやサインイン機能を提供するサービスです。

ユーザーはソーシャルアカウントやカスタムアカウントで簡単にログインできます。

たとえば、オンラインショッピングサイトの会員登録とログインに利用できます。

これにより、開発者は認証機能の構築に時間をかけずに済みます。

**毎月の上限：** Azure Active Directory B2C で月間アクティブ ユーザー数 50,000 人

🔗 https://www.microsoft.com/ja-jp/security/business/identity-access/microsoft-entra-id

---

### Microsoft Entra ID (旧称 Azure AD)

Microsoft Entra IDは、組織内のユーザーが様々なアプリケーションに安全にアクセスできるようにするサービスです。これにより、従業員は一つのIDで、社内システムやクラウドサービスにログインできます。例えば、社員が自分のPCでOffice 365にサインインする際に、Entra IDが本人確認を行います。パスワード管理の手間を減らし、セキュリティを保ちます。

**毎月の上限：** すべてのクラウド アプリへのシングル サインオン (SSO) を備えた 50,000 個の保存オブジェクト

🔗 https://www.microsoft.com/ja-jp/security/business/identity-access/microsoft-entra-id

<br><br>
## 🧩 統合

### API Management

API Managementは、組織内外でAPIを安全に公開、管理、分析するためのサービスです。開発者は、APIのアクセス制御や使用状況の監視を統合的に行えます。例えば、外部パートナーに商品カタログAPIを公開する際、利用制限や料金設定を細かく管理できます。これにより、APIの価値を最大限に引き出し、ビジネスの拡大を助けます。

**毎月の上限：** 従量課金レベルで毎月 100 万通話無料

🔗 https://azure.microsoft.com/ja-jp/products/api-management/

---

### Event Grid

Event Gridは、様々なAzureサービスやアプリケーションから発生するイベントを、必要とする別のサービスへ配信する仕組みです。

これにより、システム内の様々な処理を自動的に開始させることができます。

例えば、ストレージに新しいファイルがアップロードされた際に、そのファイルを自動で処理するプログラムを動かすことが可能です。

イベント駆動型アーキテクチャを構築する上で、中心的な役割を担います。

**毎月の上限：** 1 か月あたり 100,000 件の操作

🔗 https://azure.microsoft.com/ja-jp/products/event-grid/

---

### Health Data Services

Health Data Servicesは、医療機関が患者の健康情報を管理・共有するためのクラウドサービスです。このサービスを利用すると、様々なシステムから得られた電子カルテや検査結果などを、統一された形式で安全に保管できます。例えば、複数の病院にかかる患者さんの情報を、一元的に把握することが可能になります。これにより、より質の高い医療提供につながります。

**毎月の上限：** 1 GB の構造化ストレージと BLOB ストレージ、50,000 件の API リクエスト、0.5 GB の変換操作、100,000 件のイベント

🔗 https://azure.microsoft.com/ja-jp/products/health-data-services/

---

### Logic Apps

Logic Appsは、様々なアプリケーションやサービスを連携させる自動化ワークフローを作成するサービスです。簡単な操作で、複数のシステム間のデータ連携や処理を自動化できます。例えば、メールを受信したら、その内容を元にSharePointにファイルを保存する処理を自動化できます。これにより、日々の定型作業の時間を短縮できます。

**毎月の上限：** 4,000 件の組み込みアクションと従量課金プラン

🔗 https://azure.microsoft.com/ja-jp/products/logic-apps/

---

### Web PubSub

Web PubSubは、Webアプリケーションでリアルタイムな双方向通信を構築するためのサービスです。  これにより、チャットアプリやゲームのマルチプレイヤー機能などを素早く実現できます。  例えば、多数のユーザーが同時に更新するライブスコア表示に利用できます。  サーバー側で複雑なWebSocket管理をすることなく、メッセージの送受信が可能です。

**毎月の上限：** 1 ユニットあたり 1 日 20,000 件のメッセージ、1 ユニットあたり 20 の同時接続 (最大 1 ユニット)

🔗 https://azure.microsoft.com/ja-jp/products/web-pubsub/

<br><br>
## 🌍 ネットワーク

### Azure Maps

Azure Mapsは、地図上の位置情報と地理空間データを使って、さまざまなアプリケーションに地図機能や位置情報を追加できるサービスです。

このサービスを利用すると、店舗の場所を表示したり、目的地までの経路を案内したりするアプリを作成できます。

例えば、配送車両の現在地をリアルタイムで地図上に表示し、顧客に通知するシステムを構築できます。

Azure Mapsは、位置情報を活用した新しい体験を創造するための強力な基盤となります。

**毎月の上限：** 特定のマッピングおよび位置情報分析機能のトランザクション数は 1,000 ～ 5,000 件

🔗 https://azure.microsoft.com/ja-jp/products/azure-maps/

---

### Bandwidth (データ転送)

Azureのデータ転送は、クラウド内外へのデータ移動にかかる料金を指します。

インターネット経由でデータをAzureへ送信する際、一部を除き通常無料となります。

Azureからインターネットへデータを送信する際には、転送量に応じた料金が発生します。

例えば、WebサイトのコンテンツをAzureからユーザーへ配信する際に、この料金が適用されます。

**毎月の上限：** 送信 100 GB

🔗 https://azure.microsoft.com/ja-jp/products/virtual-network/

---

### Network Watcher

Network Watcherは、Azureネットワークの監視とトラブルシューティングを行うサービスです。ネットワークのパフォーマンスを把握し、問題の原因を特定するのに役立ちます。例えば、仮想マシン間の通信が遅い場合に、その原因を調査できます。これにより、ネットワークの安定稼働を維持しやすくなります。

**毎月の上限：** 1,000 件のチェック、10 件のテスト、10 件の接続メトリックを含む 5 GB のストレージ

🔗 https://azure.microsoft.com/ja-jp/products/network-watcher/

---

### Private Link

Private Linkは、Azureの仮想ネットワークからMicrosoft Azureのサービスへ、プライベートな接続を提供するサービスです。このサービスを利用することで、インターネットを経由せずに安全にAzureサービスにアクセスできます。例えば、Azure SQL Databaseのようなデータサービスに、社内ネットワークから直接接続することが可能になります。これにより、セキュリティを強化し、ネットワーク構成を簡素化できます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/private-link/

---

### Virtual Network

仮想ネットワークは、Azureクラウド内にプライベートなネットワーク環境を構築するサービスです。

これにより、Azure上で稼働する仮想マシン同士が安全に通信できるようになります。

例えば、社内システムをAzureに移行し、外部からのアクセスを制限して保護することができます。

この仮想ネットワークは、セキュリティと管理性を高めたクラウド環境の基盤となります。

**毎月の上限：** 50 仮想ネットワーク

🔗 https://azure.microsoft.com/ja-jp/products/virtual-network/

<br><br>
## 📡 モノのインターネット (IoT)

### IoT Edge

IoT Edgeは、クラウドの分析機能やカスタムロジックをデバイス上で実行するサービスです。これにより、ネットワーク帯域幅を節約したり、リアルタイムの応答を得たりできます。例えば、工場の機械から送信されるセンサーデータを分析し、異常を早期に検知して対応できます。このサービスは、エッジコンピューティングの実現を可能にします。

**毎月の上限：** 無料のオープンソース エッジ ランタイム

🔗 https://azure.microsoft.com/ja-jp/products/iot-edge/

---

### IoT Hub

IoT Hubは、IoTデバイスを安全に接続し、双方向の通信を行うためのサービスです。デバイスからクラウドへのデータ送信や、クラウドからデバイスへのコマンド実行が可能です。例えば、工場内のセンサーデータを収集し、異常を検知するために利用できます。このサービスで、多くのデバイスを効率的に管理できます。

**毎月の上限：** 無料版では、1 日あたり 8,000 件のメッセージと 0.5 KB のメッセージ メーター サイズ

🔗 https://azure.microsoft.com/ja-jp/products/iot-hub/

<br><br>
## 📋 管理とガバナンス

### Advisor

Advisorは、Azure環境の構成やパフォーマンスを分析します。

推奨事項を提示し、コスト削減やセキュリティ向上に役立ちます。

例えば、未使用の仮想マシンの停止を提案し、料金を抑えることができます。

これにより、Azureリソースの健全な運用をサポートします。

**毎月の上限：** 無制限

🔗 https://azure.microsoft.com/ja-jp/products/advisor/

---

### Automation

Azure Automationは、クラウドやオンプレミス環境のタスクを自動化するサービスです。定期的なサーバーの再起動やパッチ適用作業を自動化できます。これにより、管理者は日常的な定型作業から解放されます。繰り返し発生する作業の実行を任せることで、人的ミスを減らし、安定した運用を実現します。

**毎月の上限：** 500 分のジョブ実行時間

🔗 https://azure.microsoft.com/ja-jp/products/automation/

---

### Azure Automanage

Azure Automanage は、Azure 仮想マシンを自動で管理し、構成を維持するサービスです。

これにより、OS の設定やセキュリティ対策が自動化され、管理者の負担が軽減されます。

例えば、パッチ適用や設定変更を自動で実行して、サーバーの稼働状況を良好に保てます。

このサービスを利用することで、IT 担当者はより戦略的な業務に集中できます。

**毎月の上限：** Automanage 固有の料金は発生しません。Automanage を通じてオンボードされた Azure サービスは、個別に課金されます

🔗 https://azure.microsoft.com/ja-jp/products/azure-automanage/

---

### Azure Lighthouse

Azure Lighthouseは、複数のAzure環境をまとめて管理できるサービスです。

これにより、顧客や組織のAzureリソースを一元的に把握し、操作することが可能になります。

例えば、複数の企業からAzureの管理を委託されたITパートナーが、それぞれの顧客の環境を効率的に管理できます。

Azure Lighthouseは、委任された権限でリソースへのアクセスと管理を提供します。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/azure-lighthouse/

---

### Azure Managed Applications、サービス カタログ

Azure Managed Applications は、組織内で共通のソリューションをデプロイ・管理するサービスです。サービス カタログでは、承認されたアプリケーションのリストを従業員が確認できます。これにより、IT部門はITインフラストラクチャの標準化とガバナンスを維持できます。例えば、新しい仮想マシン環境を迅速に展開する際に役立ちます。

**毎月の上限：** 無料公開

🔗 https://azure.microsoft.com/ja-jp/products/managed-applications/

---

### Azure Policy

Azure Policyは、Azureリソースが組織の標準や要件を満たすように管理するサービスです。これにより、リソースのデプロイ時に制約を適用し、意図しない設定を防ぐことができます。例えば、特定の地域以外での仮想マシンの作成を禁止するといったルールを設定できます。この機能で、コンプライアンスを維持し、ガバナンスを強化します。

**毎月の上限：** 構成および変更追跡機能への無料アクセス

🔗 https://azure.microsoft.com/ja-jp/products/azure-policy/

---

### Azure Resource Mover

Azure Resource Moverは、Azure内のリソースを別のAzureリージョンへ安全に移動するためのサービスです。このサービスを使うと、仮想マシンやディスクなどのリソースを対象のリージョンへコピーし、移動元からの切り替え作業を計画的に実行できます。例えば、災害対策のために本番環境のリソースを別の地域へ複製しておくことができます。これにより、予期せぬ障害発生時でも、迅速にサービスを復旧させることが可能になります。

**毎月の上限：** 無料 (イングレスとエグレスの料金が適用される場合があります)

🔗 https://azure.microsoft.com/ja-jp/products/resource-mover/

---

### Azure Update Manager

Azure Update Managerは、Azure仮想マシンやオンプレミスサーバーの更新プログラム適用を管理するサービスです。OSの更新やセキュリティパッチの適用を自動化し、サーバーを最新の状態に保てます。例えば、定例のパッチ適用作業をスケジュール設定で一元管理できます。これにより、手作業によるミスを防ぎ、管理者の負担を減らします。

**毎月の上限：** Azure リソースは無料 (Arc 対応サーバーは課金対象) です。詳細は価格ページをご覧ください

🔗 https://azure.microsoft.com/ja-jp/products/azure-update-management-center/

---

### Cloud Shell

Cloud Shellは、ブラウザからAzureリソースを操作できるクラウドベースのシェル環境です。BashまたはPowerShellを選択して、コマンドラインでAzureを管理できます。例えば、仮想マシンを作成したり、ストレージアカウントの設定を変更したりする作業に使えます。Azure portalから直接アクセスでき、特別な設定は不要です。

**毎月の上限：** Azure Files での 12 か月間 5 GB の無料ストレージ

🔗 https://azure.microsoft.com/ja-jp/get-started/azure-portal/cloud-shell/

---

### Cost Management

Cost Managementは、Azureでの支出を把握し、管理するためのサービスです。

日々の利用状況に応じて、どのサービスにどれくらいの費用がかかっているかを確認できます。

例えば、特定のプロジェクトで予想外にコストが増加していないかを、リアルタイムでチェックすることが可能です。

これにより、無駄な支出を減らし、予算内でAzureを利用し続けることができます。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/cost-management/

---

### Monitor

Azure Monitorは、Azureリソースやオンプレミス環境のパフォーマンスを監視し、問題発生を検知するサービスです。サーバーやアプリケーションの稼働状況をリアルタイムで確認し、異常があった場合は通知を受け取れます。例えば、ウェブサイトへのアクセスが急増した際に、サーバー負荷の上昇を検知して管理者に知らせることが可能です。これにより、システム全体の状態を把握し、安定稼働を維持できます。

**毎月の上限：** 機能ごとの無料利用額については、Azure Monitor の料金詳細を参照する

🔗 https://azure.microsoft.com/ja-jp/products/monitor/

---

### Resource Manager

Azure Resource Managerは、Azureリソースの作成・管理・削除をまとめて行うためのサービスです。テンプレートを使って、仮想マシンやデータベースといった複数のリソースを一度に展開できます。たとえば、開発環境を素早く再現したい場合に役立ちます。これにより、リソースのデプロイ作業が簡単になります。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/get-started/azure-portal/resource-manager/

<br><br>
## 🛡️ セキュリティ

### Azure Attestation

Azure Attestation は、信頼できる実行環境で実行されたコードが改ざんされていないことを確認するサービスです。

これにより、機密性の高いワークロードのセキュリティが確保され、攻撃から保護されます。

例えば、機密データを処理する仮想マシンが正しく起動したか検証するのに役立ちます。

このサービスは、ゼロトラスト環境での信頼性を高めるために不可欠です。

**毎月の上限：** 無料

🔗 https://azure.microsoft.com/ja-jp/products/azure-attestation/

---

### Security Center

Azure Security Centerは、Azure環境のセキュリティ状態を継続的に監視し、脅威を検知するサービスです。セキュリティポリシーを適用することで、脆弱性を特定し、是正措置を提案します。例えば、仮想マシンのパッチ適用漏れを検知し、対策を促すことが可能です。これにより、クラウド上のリソースを安全に保つことができます。

**毎月の上限：** 無料のポリシー評価と推奨事項

🔗 https://azure.microsoft.com/ja-jp/products/defender-for-cloud/

<br><br>


## 関連記事

🌈 Google Cloud Platform の常時無料枠(Always Free Services)  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

🟧 AWS の常時無料枠(Always Free Services)
👉 https://zenn.dev/good_sleeper/articles/aws-always-free

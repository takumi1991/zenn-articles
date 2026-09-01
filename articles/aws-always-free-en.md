---
title: "AWS Always Free Services (Complete List)"
emoji: "🟧"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS Always Free Services (Complete List)

AWS offers a set of services under the **Always Free tier**, which allows you to use certain resources within defined limits at no cost indefinitely. Unlike the standard Free Tier that expires after 12 months, these services remain available beyond the initial period.

Each service has usage limits (e.g., requests, storage, compute), and exceeding them results in pay-as-you-go charges.

This article provides a complete list of AWS Always Free services for learning, prototyping, and cost-efficient development.

## 💻 Compute

### AWS Lambda

AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You simply upload your code, and Lambda automatically handles the infrastructure needed to run and scale it with high availability. It's ideal for event-driven applications, web applications, microservices, and data processing tasks, automatically executing your code in response to events like file uploads, database changes, or API requests. You only pay for the compute time you consume, making it a cost-effective solution for many workloads.

🔗 https://aws.amazon.com/lambda/?did=ft_card2&trk=ft_lambda

<br><br>
## 🧱 Database

### Amazon Aurora

Amazon Aurora is a fully managed, relational database service that is compatible with MySQL and PostgreSQL. It delivers significantly higher throughput than standard MySQL and PostgreSQL databases, making it ideal for demanding enterprise applications and high-traffic websites. Aurora offers unparalleled performance and availability, automatically scaling compute and storage to meet application needs and ensuring continuous operation with fault tolerance. Its serverless option further simplifies management by automatically provisioning and scaling resources based on workload demands, eliminating the need for manual capacity planning. Use cases include large-scale, mission-critical applications, e-commerce platforms, gaming, and any workload requiring high performance, availability, and scalability with reduced operational overhead.

🔗 https://aws.amazon.com/rds/aurora/

---

### Amazon SimpleDB

Amazon SimpleDB is a fully managed NoSQL database service that offers a flexible, scalable, and highly available data store, eliminating the need for database administration tasks. It's ideal for storing and querying large amounts of unstructured and semi-structured data, making it suitable for a variety of applications. Common use cases include managing product catalogs, storing user profiles, tracking website activity, and building flexible application metadata. SimpleDB excels when you need a simple, schema-less data store that can easily adapt to changing data requirements and scales automatically with your application's growth, providing consistent performance without manual intervention.

🔗 https://aws.amazon.com/simpledb/?did=ft_card2&trk=ft_simpledb

<br><br>
## 🧩 Application Integration

### Amazon DynamoDB

Amazon DynamoDB is a fully managed, serverless NoSQL database service that provides single-digit millisecond performance for any scale of application. It's ideal for use cases requiring fast, predictable throughput and low latency, such as gaming leaderboards, IoT data ingestion, real-time bidding, and personalized user experiences. Because DynamoDB is serverless, you don't have to provision or manage servers, patch software, or operate clusters, allowing you to focus on building your applications. Its automatic scaling capabilities ensure that performance remains consistent as your data volume and traffic grow, making it a robust choice for modern, data-intensive applications.

🔗 https://aws.amazon.com/dynamodb/?did=ft_card2&trk=ft_dynamodb

---

### Amazon EventBridge

Amazon EventBridge is a serverless event bus service that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. It allows you to build event-driven architectures where different components of your system communicate asynchronously by publishing and subscribing to events.  For example, you can use EventBridge to trigger actions in response to changes in your data, such as processing a new order placed on your e-commerce site, updating a customer record in a CRM system when a new user signs up, or reacting to security alerts from AWS. This decouples your services, making them more scalable, resilient, and easier to manage.

🔗 https://aws.amazon.com/eventbridge/?did=ft_card2&trk=ft_eventbridge

---

### Amazon SNS

Amazon Simple Notification Service (SNS) is a fully managed, fast, and flexible push messaging service that decouples microservices, distributed systems, and serverless applications. It enables you to send notifications to a large number of subscribers through various supported protocols, including HTTP/S, email, SMS, and mobile push notifications. SNS is ideal for building event-driven architectures, broadcasting alerts, and coordinating distributed workflows. For instance, it can be used to notify users of order status updates, trigger downstream processing when new data arrives, or send critical system alerts to administrators.

🔗 https://aws.amazon.com/sns/?did=ft_card2&trk=ft_sns

---

### Amazon SQS

Amazon Simple Queue Service (SQS) is a fully managed, scalable messaging service that decouples, or separates, distributed system components. It acts as a buffer for storing messages as they travel between different applications or services, ensuring reliable communication even when some components are unavailable or operating at different speeds. SQS is commonly used for tasks like processing asynchronous requests, distributing work to multiple workers, and buffering data streams. For instance, an e-commerce application can use SQS to manage order processing by placing new orders into a queue that is then processed by backend services, or a mobile app can send events to SQS for later analysis. This allows for increased system resilience, scalability, and simplifies application development by removing the need to manage message brokers.

🔗 https://aws.amazon.com/sqs/?did=ft_card2&trk=ft_sqs

---

### Amazon SWF

Amazon Simple Workflow Service (SWF) is a managed service that helps developers coordinate distributed components in cloud-based applications and manage their state. It's designed for building complex, fault-tolerant workflows where individual tasks need to be orchestrated reliably over extended periods, even across different services and machines. Common use cases include long-running, multi-step processes like media encoding, order fulfillment, and financial reconciliation, where ensuring successful completion and handling failures gracefully is critical. SWF provides durable execution, ensuring that your workflow progresses reliably until completion and offers built-in error handling and retry mechanisms.

🔗 https://aws.amazon.com/swf/?did=ft_card2&trk=ft_swf

---

### AWS Step Functions

AWS Step Functions is a serverless orchestration service that helps you coordinate the components of distributed applications and microservices. It allows you to visually design, build, and execute workflows that automate a series of steps in your application. This is particularly useful for complex processes like ETL (Extract, Transform, Load) jobs, application integration, and managing long-running, stateful processes. You can use Step Functions to build reliable, scalable, and observable workflows by connecting AWS services like Lambda, ECS, and Fargate, enabling robust error handling, retries, and state management for your distributed systems.

🔗 https://aws.amazon.com/step-functions/?did=ft_card2&trk=ft_stepfunctions

<br><br>
## 🌐 Networking

### Amazon CloudFront

Amazon CloudFront is a content delivery network (CDN) that accelerates the distribution of your static and dynamic web content to end users globally. By caching your content at edge locations worldwide, CloudFront reduces latency and improves transfer speeds, ensuring a faster and more responsive user experience. This service is ideal for delivering websites, streaming video and audio, and distributing software downloads. Whether you're serving a global audience or optimizing performance for local users, CloudFront efficiently delivers your data closer to where your customers are, enhancing scalability and reducing the load on your origin servers.

🔗 https://aws.amazon.com/cloudfront/?did=ft_card2&trk=ft_cloudfront

---

### Amazon Route 53

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service that translates human-readable domain names into machine-readable IP addresses, making it easier for users to access your applications. It offers robust domain registration, DNS routing, and health checking capabilities. Use cases include directing traffic to AWS resources like EC2 instances and S3 buckets, as well as managing DNS for your existing websites and applications hosted anywhere. Route 53 also supports complex traffic management strategies like latency-based routing and failover, ensuring your users are always directed to the best performing and available endpoint.

🔗 https://aws.amazon.com/route53/?did=ft_card2&trk=ft_route53

<br><br>
## 🔐 Security

### Amazon Cognito

Amazon Cognito is a cloud-based identity service that provides secure user sign-up, sign-in, and access control for your web and mobile applications. It allows you to easily manage user identities, authenticate users from social identity providers like Google or Facebook, and control access to your application's resources. Cognito is ideal for building applications where you need to register and manage users, implement social login, or secure APIs and backend resources. It handles the complexities of user management and authentication, letting you focus on building your application's core features and ensuring a smooth and secure user experience.

🔗 https://aws.amazon.com/cognito/?did=ft_card2&trk=ft_cognito

---

### AWS Certificate Manager

AWS Certificate Manager (ACM) simplifies the process of provisioning, managing, and deploying SSL/TLS certificates for your websites and applications. It allows you to easily obtain certificates from a trusted Certificate Authority (CA) or import your own, all within the AWS environment. ACM is particularly useful for securing traffic to your applications hosted on services like Elastic Load Balancing, Amazon CloudFront, and API Gateway, as well as for workloads running in hybrid and multicloud setups. By automating renewals and simplifying management, ACM helps ensure the security and trustworthiness of your online presence without the hassle of manual certificate lifecycle management.

🔗 https://aws.amazon.com/certificate-manager/?did=ft_card2&trk=ft_certmanager

---

### AWS Key Management Service

AWS Key Management Service (KMS) is a managed service that simplifies the creation and management of cryptographic keys, enabling you to encrypt and decrypt data across AWS services and your applications.  It offers robust administrative controls, allowing you to define policies for key usage and access. KMS is commonly used to protect sensitive data stored in services like Amazon S3, Amazon RDS, and Amazon EBS, as well as for securing application secrets and ensuring compliance with regulatory requirements through auditable key usage logs. By centralizing key management, KMS helps you maintain data security and control without the operational burden of managing your own encryption infrastructure.

🔗 https://aws.amazon.com/kms/?did=ft_card2&trk=ft_kms

---

### AWS Resource Access Manager

AWS Resource Access Manager (RAM) enables you to securely share AWS resources, like Amazon Machine Images (AMIs), VPC subnets, and AWS License Manager resource grants, across different AWS accounts or within your AWS Organization. This eliminates the need to manually replicate resources, simplifying management and reducing operational overhead. RAM is invaluable for centralized resource management, allowing you to grant granular access to shared resources without compromising security or control. For instance, you can share custom AMIs with development teams in separate accounts, or make VPC subnets available to multiple accounts for shared networking infrastructure. It streamlines collaboration and promotes resource reuse across your AWS environment.

🔗 https://aws.amazon.com/ram/?did=ft_card2&trk=ft_resourceaccess

---

### AWS Security Incident Response

AWS Security Incident Response (SIR) is a managed service designed to help organizations automatically detect, analyze, and respond to security threats on AWS. It leverages AWS expertise and cloud-native tools to orchestrate complex incident response workflows. This service is ideal for scenarios like identifying and isolating compromised EC2 instances, detecting anomalous login attempts, or responding to suspected data exfiltration. By automating routine tasks and providing expert guidance, SIR helps minimize the impact of security incidents, reduce response times, and strengthen overall security posture. It empowers security teams to focus on critical investigations rather than manual, time-consuming remediation processes.

🔗 https://aws.amazon.com/security-incident-response/?did=ft_card2&trk=ft_security-incident-response

---

### AWS Shield

AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications and networks. It provides always-on detection and automatic inline mitigations to defend against common, frequently occurring network and transport layer DDoS attacks, as well as more sophisticated application layer attacks. AWS Shield Standard is automatically included for all AWS customers at no additional cost, offering basic protection for services like Route 53, CloudFront, and Elastic Load Balancing. For enhanced protection and visibility, AWS Shield Advanced offers more advanced detection, sophisticated mitigation techniques, and near real-time visibility into attacks, along with integration with AWS WAF for application-layer DDoS mitigation. This makes it ideal for businesses that require robust protection against disruptive cyberattacks to ensure the availability of their online services and applications.

🔗 https://aws.amazon.com/shield/?did=ft_card2&trk=ft_shield

---

### AWS WAF Bot Control

AWS WAF Bot Control helps safeguard your web applications against automated threats like credential stuffing, content scraping, and vulnerability scanning. This managed rule group for AWS WAF automatically identifies and blocks a broad range of sophisticated bots, allowing you to focus on legitimate user traffic. It's particularly useful for e-commerce sites protecting against inventory hoarding and price scraping, or for APIs wanting to prevent denial-of-service attacks. By understanding bot behavior and leveraging machine learning, Bot Control offers an easy-to-implement layer of defense, significantly reducing operational overhead and improving the security posture of your online assets.

🔗 https://aws.amazon.com/waf/features/bot-control/?did=ft_card2&trk=ft_WAFbc

<br><br>
## 📊 Analytics

### Amazon DataZone

Amazon DataZone is a data governance service that simplifies data discovery, sharing, and collaboration across your organization. It provides a business-friendly catalog to easily find and access data, while enforcing consistent security and governance policies. This enables teams to use trusted data for analytics, machine learning, and business intelligence initiatives without needing deep technical expertise or navigating complex data silos. Use cases include empowering data analysts to find and use data for reports, allowing data scientists to build machine learning models with relevant datasets, and facilitating regulated industries to securely share sensitive information. DataZone helps break down data barriers, fostering a data-driven culture and accelerating innovation.

🔗 https://aws.amazon.com/datazone/?did=ft_card2&trk=ft_datazone

---

### Amazon OpenSearch Service

Amazon OpenSearch Service is a fully managed offering that makes it easy to deploy, operate, and scale OpenSearch clusters for AI-powered search, log analytics, and real-time application monitoring. It provides a robust and secure environment, allowing you to leverage powerful features like full-text search, complex aggregations, and machine learning for anomaly detection and recommendations. This service is ideal for use cases such as building sophisticated search functionalities into applications, analyzing vast amounts of log data for troubleshooting and insights, and performing real-time observability to understand application performance and user behavior. It also supports vector search for AI-driven applications, simplifying the integration of vector databases.

🔗 https://aws.amazon.com/opensearch-service/?did=ft_card2&trk=ft_opensearch

---

### AWS Glue

AWS Glue is a fully managed extract, transform, and load (ETL) service that simplifies the process of preparing and loading data for analytics. It allows you to discover your data, transform it, and move it to a data store, such as an Amazon S3 data lake or an Amazon Redshift data warehouse. Glue automatically generates Python or Scala code for your ETL jobs, and you can run these jobs on a managed Apache Spark environment. Common use cases include building a data lake, migrating data to AWS, and transforming data for business intelligence dashboards and machine learning models. Its serverless nature means you only pay for what you use, making it a cost-effective solution for data integration.

🔗 https://aws.amazon.com/glue/?did=ft_card2&trk=ft_glue

<br><br>
## 🧠 AI

### Amazon Q Business

Amazon Q Business is a generative AI-powered assistant designed to enhance productivity by helping employees access and synthesize information from their company's internal data sources. It can answer complex questions, summarize documents, generate content, and automate tasks, enabling users to find information quickly and efficiently without needing extensive technical expertise. For instance, it can help a customer support agent find relevant policy details to resolve an inquiry, assist a developer in understanding legacy code, or aid a marketer in drafting campaign copy. By integrating with existing business systems, Amazon Q Business empowers employees to work smarter and faster, transforming how they interact with company knowledge.

🔗 https://aws.amazon.com/q/business/?did=ft_card2&trk=ft_qbusiness

---

### Amazon Q Developer

Amazon Q Developer is a generative AI-powered assistant designed to significantly enhance software development workflows. It helps developers by providing context-aware code suggestions, generating code snippets for common tasks, and assisting in debugging by identifying and explaining errors. Developers can leverage Amazon Q to accelerate feature development, refactor existing code for better performance and maintainability, and even write comprehensive unit tests. Its understanding of your codebase and AWS services allows it to offer more relevant and accurate assistance, ultimately boosting productivity and code quality.

🔗 https://aws.amazon.com/q/developer/?did=ft_card2&trk=ft_q

<br><br>
## 🛠️ Developer Tools

### Amazon CloudWatch

Amazon CloudWatch is a comprehensive monitoring and observability service for AWS cloud resources and applications. It collects and tracks metrics, collects and monitors log files, and sets alarms based on thresholds of your choosing. CloudWatch is invaluable for understanding application performance, identifying and responding to potential issues, and optimizing resource utilization. Use cases include tracking CPU utilization on EC2 instances, monitoring latency of applications hosted on Elastic Beanstalk, analyzing logs from Lambda functions for errors, and receiving alerts when disk I/O exceeds normal levels, ensuring the health and availability of your cloud environment.

🔗 https://aws.amazon.com/cloudwatch/?did=ft_card2&trk=ft_cloudwatch

---

### Amazon CodeCatalyst

Amazon CodeCatalyst is a unified, extensible continuous integration and continuous delivery (CI/CD) service that helps developers build and deliver applications faster on AWS. It streamlines the entire development workflow, from code commit to deployment, by integrating popular development tools and AWS services into a single environment.  Use cases include rapid prototyping, building and deploying microservices, migrating monolithic applications to the cloud, and maintaining existing applications with automated CI/CD pipelines. CodeCatalyst simplifies complex DevOps processes, enabling teams to focus on writing code and delivering value to their customers without getting bogged down in infrastructure management.

🔗 https://aws.amazon.com/codecatalyst/?did=ft_card2&trk=ft_codecatalyst

---

### AWS CodeArtifact

AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share software packages used in their development processes. It supports popular package formats like Maven, npm, and PyPI, acting as a central hub for dependencies. This service helps development teams improve build efficiency and security by providing a reliable source for their project dependencies, preventing issues with external repositories and enabling fine-grained access control. Use cases include managing internal libraries, third-party dependencies, and creating standardized artifact repositories across an organization, ensuring consistent and secure software supply chains.

🔗 https://aws.amazon.com/codeartifact/?did=ft_card2&trk=ft_codeartifact

---

### AWS CodeBuild

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready to deploy. It eliminates the need for you to provision, manage, and scale your own build servers. Developers can use CodeBuild to automate their build and test processes, speeding up the software development lifecycle and ensuring code quality. Common use cases include building code from various repositories like AWS CodeCommit, GitHub, and Bitbucket, running unit and integration tests, and packaging applications for deployment to services like AWS Elastic Beanstalk or Amazon ECS. By handling the infrastructure, CodeBuild allows teams to focus on writing and delivering code faster.

🔗 https://aws.amazon.com/codebuild/?did=ft_card2&trk=ft_codebuild

---

### AWS CodePipeline

AWS CodePipeline is a fully managed continuous delivery service that automates your release pipelines for fast and reliable application and infrastructure updates. It orchestrates all the activities needed to help you release your software rapidly, from code commit to production. This includes automating build, test, and deploy phases, enabling use cases like continuous integration and continuous deployment (CI/CD) for web applications, mobile apps, and microservices. By integrating with other AWS services like CodeCommit, CodeBuild, and CodeDeploy, CodePipeline provides a visual workflow that shows the progress of your releases, helping teams deliver features, fixes, and updates more frequently and with less risk.

🔗 https://aws.amazon.com/codepipeline/?did=ft_card2&trk=ft_codepipeline

---

### AWS X-Ray

AWS X-Ray is a powerful service that helps developers analyze and debug distributed applications. It traces requests as they travel through your application's services, providing a visual end-to-end map of your application's architecture and identifying performance bottlenecks or errors. Developers use X-Ray to pinpoint the root cause of latency issues, track down exceptions, and understand how different services interact. This is invaluable for optimizing performance, troubleshooting bugs in complex microservice environments, and gaining insights into application behavior in production. By visualizing the flow of requests, X-Ray simplifies the debugging process and improves the overall reliability and efficiency of your applications.

🔗 https://aws.amazon.com/xray/?did=ft_card2&trk=ft_xray

<br><br>
## 🏛️ Management & Governance

### Amazon Managed Service for Prometheus

Amazon Managed Service for Prometheus (AMP) is a fully managed Prometheus-compatible service designed to monitor and alert on your containerized applications and infrastructure. It automatically scales to handle your data ingestion and query needs, eliminating the operational burden of managing your own Prometheus servers. AMP is ideal for collecting and querying metrics from Amazon Elastic Kubernetes Service (EKS) and Amazon Elastic Container Service (ECS) clusters, enabling you to gain deep visibility into application performance and health. This allows for proactive issue detection, performance optimization, and enhanced reliability of your containerized workloads, ensuring your applications are running smoothly and efficiently.

🔗 https://aws.amazon.com/prometheus/?did=ft_card2&trk=ft_msfp

---

### AWS Budgets

AWS Budgets helps you to proactively manage your AWS costs and usage by allowing you to set custom budgets. You can define budgets for your costs and usage and receive alerts when your actual or forecasted costs and usage exceed, or are forecasted to exceed, the threshold you have set. This enables you to prevent cost overruns and optimize spending across your AWS environment. Use cases include setting a monthly budget for your Amazon EC2 instances, monitoring your data transfer costs, or ensuring your AWS Lambda function invocations stay within a defined limit. By providing real-time visibility and actionable alerts, AWS Budgets empowers you to maintain financial control and make informed decisions about your cloud expenditure, ultimately improving your planning and cost control.

🔗 https://aws.amazon.com/aws-cost-management/aws-budgets/?did=ft_card2&trk=ft_budgets

---

### AWS CloudFormation

AWS CloudFormation allows you to define and manage your cloud infrastructure as code, automating the provisioning and configuration of AWS resources. By writing templates in formats like YAML or JSON, you can describe your desired infrastructure – from EC2 instances and databases to networking components – and CloudFormation translates these templates into actual AWS resources. This approach ensures consistency, repeatability, and version control for your infrastructure, significantly reducing manual errors and enabling faster deployment cycles. It's invaluable for setting up development and testing environments, implementing disaster recovery solutions, and maintaining compliance across your cloud deployments, ultimately leading to more efficient and reliable infrastructure management.

🔗 https://aws.amazon.com/cloudformation/?did=ft_card2&trk=ft_cloudformation

---

### AWS CloudTrail

AWS CloudTrail logs, continuously monitors, and retains account activity across your AWS infrastructure, providing a crucial audit trail of actions taken by users, roles, and AWS services. This service records API calls made within your AWS environment, offering insights into who did what, when, and from where. Use cases include security analysis, resource change tracking, and troubleshooting. For example, CloudTrail helps identify unauthorized access attempts, understand the history of resource modifications for compliance, or diagnose the root cause of unexpected application behavior by examining recent API calls. It's an essential tool for maintaining security and operational visibility.

🔗 https://aws.amazon.com/cloudtrail/?did=ft_card2&trk=ft_cloudtrail

---

### AWS Control Tower

AWS Control Tower simplifies the setup and ongoing governance of secure, compliant, multi-account AWS environments. It automates the creation of a landing zone, which includes a centralized management account and service accounts, enforcing guardrails to ensure security and compliance from the outset. This service is ideal for organizations that need to quickly establish a well-architected AWS environment, manage multiple teams and projects with defined policies, and maintain ongoing regulatory compliance without complex manual configuration. Control Tower's automated setup and guardrails significantly reduce the operational overhead of managing a growing AWS footprint.

🔗 https://aws.amazon.com/controltower/?did=ft_card2&trk=ft_controltower

---

### AWS License Manager

AWS License Manager helps you manage your software licenses across AWS and on-premises environments by setting rules to proactively discover and report their usage. This allows you to control license compliance, avoid unexpected costs, and optimize your license inventory.  You can use it to track licenses for vendors like Microsoft, Oracle, and SAP, ensuring you have the correct number of licenses for your deployed software and preventing license violations. It also aids in migrating applications to AWS by helping you understand your existing licensing requirements and apply them appropriately in the cloud, ultimately leading to better cost management and a more streamlined audit process.

🔗 https://aws.amazon.com/license-manager/?did=ft_card2&trk=ft_license-manager

---

### AWS re:Post

AWS re:Post is a community-driven platform where AWS customers can ask and answer technical questions, effectively removing roadblocks in their cloud journeys. Whether you're troubleshooting a deployment issue, seeking best practices for a specific service, or looking for guidance on optimizing your AWS architecture, re:Post provides a valuable resource. You can leverage it to find solutions to complex problems, learn from the experiences of other AWS users, and contribute your own expertise to the community, accelerating your learning and development on AWS. It's an essential tool for anyone needing technical support or wanting to deepen their understanding of the AWS ecosystem.

🔗 https://www.repost.aws/?did=ft_card2&trk=ft_repost

---

### AWS Resource Explorer

AWS Resource Explorer is a service that simplifies finding and managing your AWS resources across multiple Regions. It allows you to search for resources using keywords and provides a unified view of your infrastructure, making it easier to locate specific EC2 instances, S3 buckets, or RDS databases, regardless of their location. This is particularly useful for managing large or distributed AWS environments, troubleshooting issues by quickly pinpointing affected resources, and performing audits or inventory checks. Resource Explorer enhances operational efficiency by reducing the time spent navigating different consoles and remembering resource details, enabling faster responses to operational needs and ensuring better control over your cloud footprint.

🔗 https://aws.amazon.com/resourceexplorer/?did=ft_card2&trk=ft_resourceexplorer

---

### AWS Systems Manager

AWS Systems Manager provides a unified interface to manage and automate operational tasks across your AWS infrastructure. It allows you to collect and view operational data from various AWS services, enabling better visibility and quicker troubleshooting. You can leverage Systems Manager for tasks like patch management to ensure your instances are up-to-date, configuration management to maintain desired states, and run command operations to execute scripts or commands remotely on your instances. It also offers capabilities for application management, inventory collection, and parameter storage, streamlining operations and enhancing security across your AWS environment.

🔗 https://aws.amazon.com/systems-manager/?did=ft_card2&trk=ft_systemsmanager

<br><br>
## ✈️ Migration

### AWS Application Migration Service

AWS Application Migration Service (AWS MGN) is a fully managed service designed to streamline and accelerate the migration of applications to AWS. It significantly simplifies complex migrations by automating the server conversion process, allowing you to lift-and-shift your existing servers from virtually any source environment to AWS with minimal downtime and without the need for extensive replatforming.  Common use cases include migrating on-premises servers, virtual machines from other clouds, or even disaster recovery solutions to the AWS cloud. By minimizing manual intervention and reducing the complexity of application re-architecture, AWS MGN helps you lower migration costs and achieve faster time-to-value in the cloud.

🔗 https://aws.amazon.com/application-migration-service/?did=ft_card2&trk=ft_appmigration

---

### AWS Service Catalog

AWS Service Catalog allows organizations to create and manage a curated catalog of IT services, including applications, software, and infrastructure, that are approved for use on AWS. This ensures that users only deploy resources that adhere to your organization's standards for security, compliance, and cost. Common use cases include providing pre-approved virtual machine images, deploying standardized web applications, and managing database instances with specific configurations. By empowering users with self-service access to these approved services, Service Catalog streamlines provisioning, reduces manual IT effort, and enhances governance across your AWS environment.

🔗 https://aws.amazon.com/servicecatalog/?did=ft_card2&trk=ft_servicecatalog

---

### AWS Transform

AWS Transform is a groundbreaking agentic AI service designed to accelerate the modernization of legacy IT environments. It intelligently analyzes and transforms complex systems like Windows applications, mainframe code, and VMware virtual machines into modern, cloud-native architectures. This service automates much of the tedious and error-prone manual migration process, enabling organizations to move their critical applications to the cloud faster and with greater confidence. Key use cases include modernizing monolithic applications for improved scalability and agility, migrating off expensive mainframe systems, and re-architecting virtualized environments for enhanced flexibility and cost-efficiency, ultimately unlocking the benefits of cloud computing for a wider range of enterprise workloads.

🔗 https://aws.amazon.com/transform/?did=ft_card2&trk=ft_transform

---

### Migration Evaluator

Migration Evaluator is an AWS service that provides a quick and free way for organizations to understand the projected costs of migrating their on-premises infrastructure to Amazon Web Services. By analyzing existing IT environments, it generates detailed reports that estimate future AWS spending, allowing businesses to make informed decisions about their cloud adoption strategy. This tool is invaluable for financial planning, budget forecasting, and demonstrating the potential return on investment for cloud migration projects. It helps identify cost savings and optimize resource allocation, enabling a smoother and more predictable transition to AWS for various workloads, from full data center consolidations to specific application migrations.

🔗 https://aws.amazon.com/migration-evaluator/?did=ft_card2&trk=ft_migeval

<br><br>

   
     
   ## Related: Always Free tiers in other clouds
   
   🟦 Microsoft Azure Always Free
   https://zenn.dev/good_sleeper/articles/azure-always-free-en
   
   
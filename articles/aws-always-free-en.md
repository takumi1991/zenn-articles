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

AWS Lambda is a serverless compute service that lets you run code in response to events without provisioning or managing servers. You simply upload your code, and Lambda automatically handles the infrastructure needed to run and scale it with high availability. It's ideal for a wide range of applications, from building data processing pipelines and real-time file processing to creating web backends and automating IT tasks. For example, you can use Lambda to resize images uploaded to S3, process streaming data from Kinesis, or trigger notifications based on database changes. This abstraction allows developers to focus purely on writing their application logic, significantly reducing operational overhead and accelerating development cycles.

🔗 https://aws.amazon.com/lambda/?did=ft_card2&trk=ft_lambda

<br><br>
## 🧱 Database

### Amazon Aurora

Amazon Aurora is a fully managed, relational database service that offers unmatched performance and availability for mission-critical applications. It's compatible with MySQL and PostgreSQL, allowing developers to leverage familiar tools and code. Aurora's serverless option automatically scales compute and storage resources up or down based on workload demands, optimizing cost and performance. This makes it ideal for a wide range of use cases, including e-commerce platforms, financial services, gaming applications, and any scenario requiring a highly available, performant, and scalable relational database without the burden of manual administration. Its fault-tolerant architecture and automatic backups ensure data durability and disaster recovery.

🔗 https://aws.amazon.com/rds/aurora/

---

### Amazon SimpleDB

Amazon SimpleDB is a managed NoSQL database service that simplifies data storage by eliminating the need for database administration. It is designed for applications that require a flexible, scalable, and highly available data store without complex management overhead. SimpleDB is well-suited for use cases like storing product catalogs, user profiles, or application-specific metadata where the data schema is likely to evolve or is not rigidly defined. Its ease of use and automatic scaling make it a good choice for developers who want to focus on application logic rather than database infrastructure.

🔗 https://aws.amazon.com/simpledb/?did=ft_card2&trk=ft_simpledb

<br><br>
## 🧩 Application Integration

### Amazon DynamoDB

Amazon DynamoDB is a fully managed, serverless NoSQL database that delivers single-digit millisecond performance at virtually any scale. It's designed for applications requiring high availability and throughput, making it ideal for use cases like e-commerce, gaming leaderboards, IoT data, and mobile applications. DynamoDB automatically scales to accommodate fluctuating workloads, and its flexible schema allows for rapid development and iteration. Developers can easily store and retrieve any amount of data and serve any level of request traffic without provisioning or managing servers, making it a cost-effective and efficient choice for modern application backends.

🔗 https://aws.amazon.com/dynamodb/?did=ft_card2&trk=ft_dynamodb

---

### Amazon EventBridge

Amazon EventBridge is a serverless event bus service that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. It acts as a central hub for routing events, enabling you to build scalable, event-driven architectures without managing any infrastructure. EventBridge can be used for a variety of use cases, such as automating tasks in response to changes in AWS services like S3 or EC2, integrating third-party SaaS applications to trigger workflows, or building custom event-driven microservices. By decoupling event producers from event consumers, EventBridge provides flexibility and resilience, allowing you to react to real-time events and build more dynamic and responsive applications.

🔗 https://aws.amazon.com/eventbridge/?did=ft_card2&trk=ft_eventbridge

---

### Amazon SNS

Amazon Simple Notification Service (SNS) is a fully managed, fast, and flexible push messaging service that decouples publishers from subscribers. It allows you to send messages from an application or service to multiple recipients simultaneously, enabling asynchronous communication patterns. SNS is ideal for a wide range of use cases, including fan-out architectures where a single event triggers actions across many different systems, distributing alerts and notifications to users, and coordinating distributed application workflows. It reliably delivers messages to various endpoints like mobile push notifications (iOS, Android), SMS, email, and even other AWS services like SQS queues or Lambda functions.

🔗 https://aws.amazon.com/sns/?did=ft_card2&trk=ft_sns

---

### Amazon SQS

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It reliably stores messages, allowing different components of an application to communicate asynchronously without direct, real-time connections. This is particularly useful for tasks like buffering, processing background jobs, and ensuring reliable message delivery in event-driven architectures. For example, SQS can handle payment processing, order fulfillment, or sending notifications without overwhelming individual services, as messages are stored and processed at their own pace. Its scalability ensures that it can handle fluctuations in traffic, making applications more resilient and efficient.

🔗 https://aws.amazon.com/sqs/?did=ft_card2&trk=ft_sqs

---

### Amazon SWF

Amazon Simple Workflow Service (SWF) is a stateful, task coordination service that helps developers coordinate work across distributed components of their cloud applications. It ensures that tasks are executed in a specific order, that all necessary steps are completed, and that failures are handled gracefully. SWF is ideal for building complex, distributed systems like long-running business processes, data processing pipelines, and microservice orchestration. By managing the state of each workflow execution, SWF allows applications to scale reliably, recover from failures, and maintain a clear audit trail of operations without developers needing to manage the underlying infrastructure or complex state-tracking logic.

🔗 https://aws.amazon.com/swf/?did=ft_card2&trk=ft_swf

---

### AWS Step Functions

AWS Step Functions is a serverless orchestration service that helps developers coordinate distributed applications and microservices using visual workflows. It allows you to build applications by connecting together AWS services, such as AWS Lambda, Amazon EC2, and Amazon DynamoDB, into flexible and resilient workflows. Common use cases include automating business processes, orchestrating data processing pipelines, managing IT automation tasks, and building complex application backends. By visualizing your application's flow, Step Functions makes it easier to debug, monitor, and manage your distributed systems, ensuring that each step completes successfully or handles errors gracefully, thus improving the reliability and scalability of your applications.

🔗 https://aws.amazon.com/step-functions/?did=ft_card2&trk=ft_stepfunctions

<br><br>
## 🌐 Networking

### Amazon CloudFront

Amazon CloudFront is a global content delivery network (CDN) that securely delivers data, videos, applications, and APIs to customers with low latency and high transfer speeds. It caches content at edge locations around the world, bringing it closer to your users and reducing the load on your origin servers. CloudFront is ideal for distributing static and dynamic web content, streaming media, and distributing software or game updates. By leveraging CloudFront, you can improve user experience through faster loading times and ensure your applications remain responsive even during traffic spikes.

🔗 https://aws.amazon.com/cloudfront/?did=ft_card2&trk=ft_cloudfront

---

### Amazon Route 53

Amazon Route 53 acts as a highly available and scalable Domain Name System (DNS) web service, translating human-readable domain names into IP addresses that computers understand. It enables you to register your own domain names and manage them, or transfer existing domains to AWS. Common use cases include routing internet traffic to AWS resources like EC2 instances and S3 buckets, performing health checks on your applications to automatically redirect traffic away from unhealthy endpoints, and providing domain name registration and DNS resolution for your websites and applications. Route 53 also supports advanced routing policies, such as latency-based routing and geoproximity routing, to optimize performance and user experience.

🔗 https://aws.amazon.com/route53/?did=ft_card2&trk=ft_route53

<br><br>
## 🔐 Security

### Amazon Cognito

Amazon Cognito is a managed service that provides secure user sign-up, sign-in, and access control for your web and mobile applications. It allows you to easily add user management capabilities without building them yourself, handling everything from user identity to secure access to your AWS resources. Cognito is ideal for building social sign-in (e.g., Google, Facebook) and federated identities, managing user directories for your applications, and granting users secure, temporary access to AWS services like S3 or API Gateway based on their authenticated identity. It simplifies the complex process of identity management, ensuring your applications are secure and scalable.

🔗 https://aws.amazon.com/cognito/?did=ft_card2&trk=ft_cognito

---

### AWS Certificate Manager

AWS Certificate Manager (ACM) simplifies the process of provisioning, managing, and deploying SSL/TLS certificates, enabling secure communication for your applications. It allows you to easily obtain free public SSL/TLS certificates from a trusted Certificate Authority, and also supports importing your own certificates. ACM integrates seamlessly with various AWS services like Elastic Load Balancing, Amazon CloudFront, and API Gateway, facilitating secure connections for your websites, APIs, and other network-facing resources. You can also leverage ACM to secure workloads running in hybrid and multicloud environments, ensuring consistent security posture across your entire infrastructure. This eliminates the manual overhead of certificate renewal and management, allowing you to focus on your core business.

🔗 https://aws.amazon.com/certificate-manager/?did=ft_card2&trk=ft_certmanager

---

### AWS Key Management Service

AWS Key Management Service (KMS) is a managed service that makes it easy to create and control encryption keys used to encrypt your data. KMS integrates seamlessly with other AWS services like S3, EBS, and RDS, allowing you to encrypt data at rest with minimal effort and administrative overhead. You can use KMS to protect sensitive information, comply with regulatory requirements, and maintain audit trails of key usage. Common use cases include encrypting application data, databases, logs, and configuration files, ensuring that only authorized users and services can access your information. KMS simplifies key management by handling the secure storage, rotation, and destruction of your encryption keys.

🔗 https://aws.amazon.com/kms/?did=ft_card2&trk=ft_kms

---

### AWS Resource Access Manager

AWS Resource Access Manager (RAM) enables you to securely share AWS resources, like Amazon Machine Images (AMIs), Amazon VPC subnets, and AWS License Manager resources, across multiple AWS accounts. This is particularly useful for centralizing resource management and ensuring consistent configurations within an organization. For instance, you can share a custom AMI with development teams in separate accounts, or grant read-only access to shared AMIs for disaster recovery purposes. RAM facilitates this sharing through resource shares, allowing you to control which accounts can access specific resources, thereby enhancing security and simplifying cross-account operations.

🔗 https://aws.amazon.com/ram/?did=ft_card2&trk=ft_resourceaccess

---

### AWS Security Incident Response

AWS Security Incident Response is a managed service that helps organizations automate their response to security threats and incidents, leveraging AWS expertise. It provides playbooks and tooling to detect, investigate, and remediate security events efficiently.  This service is crucial for use cases like responding to compromised credentials, detecting malicious activity on EC2 instances, or addressing data exfiltration attempts. By automating repetitive tasks and offering guided workflows, it significantly reduces the mean time to respond, minimizing the impact of security breaches and ensuring compliance with security best practices.

🔗 https://aws.amazon.com/security-incident-response/?did=ft_card2&trk=ft_security-incident-response

---

### AWS Shield

AWS Shield is a managed distributed denial of service (DDoS) protection service that safeguards web applications and networks from common and complex DDoS attacks. It automatically integrates with AWS services like CloudFront and Route 53 to provide always-on detection and mitigation of common network and transport layer DDoS threats. For sophisticated and application-layer attacks, AWS Shield Advanced offers enhanced visibility, detailed attack reporting, and access to the AWS DDoS Response Team for real-time support. Use cases include protecting websites, APIs, and other network-facing applications from disruptions that can impact availability and revenue. It helps ensure business continuity by minimizing downtime during an attack.

🔗 https://aws.amazon.com/shield/?did=ft_card2&trk=ft_shield

---

### AWS WAF Bot Control

AWS WAF Bot Control automatically protects your web applications from common and pervasive web bots, helping to prevent them from consuming resources, skewing metrics, or performing malicious activities. It categorizes incoming traffic into identifiable bots, human visitors, and unknown traffic, allowing you to define custom actions based on these categories. This service is ideal for safeguarding against content scraping, credential stuffing, vulnerability scanning, and other automated attacks that can impact application performance and security. By leveraging AWS WAF Bot Control, you can ensure that legitimate users have a smooth experience while mitigating the risks posed by automated bots.

🔗 https://aws.amazon.com/waf/features/bot-control/?did=ft_card2&trk=ft_WAFbc

<br><br>
## 📊 Analytics

### Amazon DataZone

Amazon DataZone is a data management service that simplifies data discovery, cataloging, and governance across your organization. It empowers users to easily find, access, and share data, even when it resides in different accounts or services, by providing a centralized catalog and robust access controls. This is particularly useful for data analysts needing to combine data from various sources for machine learning projects, or business users seeking to understand and utilize customer data scattered across marketing and sales systems. With built-in governance, Amazon DataZone ensures compliance and security while fostering collaboration and accelerating data-driven insights.

🔗 https://aws.amazon.com/datazone/?did=ft_card2&trk=ft_datazone

---

### Amazon OpenSearch Service

Amazon OpenSearch Service is a managed service that simplifies the deployment, operation, and scaling of OpenSearch clusters for AI-powered search, application monitoring, and log analytics.  It provides a robust and cost-effective solution for ingesting, searching, and visualizing large volumes of data in near real-time.  Use cases include building powerful site search engines, analyzing application logs to diagnose issues, and implementing real-time dashboards for operational insights.  Furthermore, it now supports vector database capabilities, enabling advanced AI-driven applications like semantic search, recommendation engines, and anomaly detection.

🔗 https://aws.amazon.com/opensearch-service/?did=ft_card2&trk=ft_opensearch

---

### AWS Glue

AWS Glue is a fully managed, cost-effective extract, transform, and load (ETL) service that makes it easy to prepare and move data for analytics. It automatically discovers data from various sources, infers schemas, and generates ETL code in Python or Scala. Glue allows you to catalog your data, run serverless ETL jobs to transform and enrich it, and then load it into data lakes, data warehouses, or other destinations. Common use cases include building data lakes, migrating data to the cloud, and performing complex data transformations for business intelligence and machine learning. Its flexibility and serverless nature eliminate the need to manage infrastructure, making data preparation simpler and more efficient.

🔗 https://aws.amazon.com/glue/?did=ft_card2&trk=ft_glue

<br><br>
## 🧠 AI

### Amazon Q Business

Amazon Q Business is a generative AI-powered assistant designed to boost workplace productivity by connecting to your company's data sources. It acts as a smart chatbot, allowing employees to ask natural language questions about internal documents, customer records, and other business information, receiving concise and relevant answers. This enables powerful use cases such as quickly summarizing meeting transcripts, finding specific information within lengthy reports, troubleshooting technical issues by analyzing logs, and even generating draft responses to customer inquiries. By understanding business-specific context, Amazon Q Business helps employees access knowledge faster, make better-informed decisions, and automate routine tasks, ultimately streamlining operations and fostering innovation.

🔗 https://aws.amazon.com/q/business/?did=ft_card2&trk=ft_qbusiness

---

### Amazon Q Developer

Amazon Q Developer is a generative AI-powered assistant that enhances the software development lifecycle. It helps developers be more productive by providing intelligent assistance throughout their workflow. For instance, Amazon Q Developer can answer questions about your codebase, offer code suggestions, and even generate code snippets based on natural language prompts. It assists with tasks like debugging, refactoring, testing, and migrating applications, ultimately accelerating development speed and improving code quality. By understanding context and providing tailored responses, it acts as a valuable partner in building, deploying, and managing applications on AWS.

🔗 https://aws.amazon.com/q/developer/?did=ft_card2&trk=ft_q

<br><br>
## 🛠️ Developer Tools

### Amazon CloudWatch

Amazon CloudWatch is a powerful monitoring and observability service for AWS cloud resources and applications. It collects and tracks metrics, collects and monitors log files, and sets alarms to automatically respond to changes in your AWS environment.  This allows you to gain visibility into resource utilization, application performance, and operational health. You can use CloudWatch to detect anomalous activity, set alarms that trigger notifications or automated actions when certain thresholds are breached, and troubleshoot issues by analyzing log data. Common use cases include tracking EC2 instance CPU utilization, monitoring Lambda function invocations, analyzing application logs for errors, and ensuring application availability by setting alarms on key performance indicators.

🔗 https://aws.amazon.com/cloudwatch/?did=ft_card2&trk=ft_cloudwatch

---

### Amazon CodeCatalyst

Amazon CodeCatalyst is a unified application development service that simplifies building and delivering applications on AWS. It streamlines the entire development lifecycle, from coding and building to deploying and monitoring, by providing integrated tools and automated workflows. Developers can leverage CodeCatalyst for rapid prototyping, continuous integration and continuous delivery (CI/CD) pipelines, and managing the infrastructure needed to run their applications. This allows teams to accelerate development cycles, reduce operational overhead, and focus on innovation, making it ideal for startups and enterprises alike looking to scale their application development efforts efficiently on AWS.

🔗 https://aws.amazon.com/codecatalyst/?did=ft_card2&trk=ft_codecatalyst

---

### AWS CodeArtifact

AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share software packages used in their development processes. It supports popular package formats like npm, Maven, PyPI, NuGet, and generic artifacts, centralizing dependencies and streamlining the build and deployment pipeline. Developers can use CodeArtifact to efficiently manage internal libraries, track versions, and control access to dependencies, reducing build times and improving software supply chain security. This service is particularly useful for teams working with multiple programming languages or complex dependency graphs, ensuring consistent and reliable builds across different projects and environments.

🔗 https://aws.amazon.com/codeartifact/?did=ft_card2&trk=ft_codeartifact

---

### AWS CodeBuild

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready to deploy. It eliminates the need to provision, manage, and scale your own build servers. CodeBuild seamlessly integrates with common development tools like GitHub, AWS CodeCommit, and Amazon S3, making it easy to automate your software release process. It's ideal for building container images, running unit and integration tests, and preparing application artifacts for deployment to services like AWS Elastic Beanstalk or Amazon ECS. This service offers a scalable and cost-effective solution for accelerating your development lifecycle.

🔗 https://aws.amazon.com/codebuild/?did=ft_card2&trk=ft_codebuild

---

### AWS CodePipeline

AWS CodePipeline automates your release pipelines for fast and reliable application updates. It orchestrates building, testing, and deploying your code, integrating seamlessly with other AWS developer tools like CodeCommit for source control, CodeBuild for compiling, and CodeDeploy for managing deployments.  This service is invaluable for enabling continuous integration and continuous delivery (CI/CD) workflows, allowing teams to frequently and confidently ship new features, updates, and fixes to their users. Whether you're deploying web applications, mobile apps, or even IoT devices, CodePipeline streamlines the entire release process, reducing manual effort and the potential for human error.

🔗 https://aws.amazon.com/codepipeline/?did=ft_card2&trk=ft_codepipeline

---

### AWS X-Ray

AWS X-Ray is a service that helps you analyze and debug distributed applications by providing a visual representation of your application's request flow.  It traces requests as they travel through your application's services, identifying performance bottlenecks and errors.  Common use cases include pinpointing latency issues across microservices, understanding how different components interact, and debugging complex distributed systems by visualizing the entire request path.  This allows developers to gain a deeper understanding of their application's behavior and efficiently resolve performance problems.

🔗 https://aws.amazon.com/xray/?did=ft_card2&trk=ft_xray

<br><br>
## 🏛️ Management & Governance

### Amazon Managed Service for Prometheus

Amazon Managed Service for Prometheus is a fully managed service that simplifies operating Prometheus at scale, enabling you to monitor and alert on your containerized applications.  It automatically discovers and collects metrics from your services, then stores them in a highly available and scalable time-series database.  Use cases include analyzing application performance, identifying resource utilization bottlenecks, and proactively detecting and responding to issues in your Kubernetes environments like EKS.  By offloading the operational burden of managing a Prometheus server, your team can focus on building and deploying applications rather than infrastructure maintenance.

🔗 https://aws.amazon.com/prometheus/?did=ft_card2&trk=ft_msfp

---

### AWS Budgets

AWS Budgets empowers users to proactively manage and control their cloud spending with customizable budgeting tools. It allows you to set spending limits for services like Amazon EC2, S3, or even specific tags, and receive alerts when your actual or forecasted costs exceed these thresholds, helping you avoid unexpected bills. This service is crucial for organizations aiming to optimize their AWS expenditure, predict future costs accurately, and ensure budget adherence across different teams or projects, ultimately driving cost efficiency and financial predictability.

🔗 https://aws.amazon.com/aws-cost-management/aws-budgets/?did=ft_card2&trk=ft_budgets

---

### AWS CloudFormation

AWS CloudFormation allows you to model and provision your entire cloud infrastructure as code, treating your infrastructure like software. You define resources like EC2 instances, databases, and networks in a template file, which CloudFormation then uses to create, update, and delete them consistently and reliably. This enables significant benefits, such as automating infrastructure deployment for faster application releases, ensuring consistent environments across development, testing, and production, and facilitating easier disaster recovery planning. CloudFormation also helps maintain configuration compliance by tracking infrastructure state and managing changes through a declarative approach, making troubleshooting and auditing much more efficient.

🔗 https://aws.amazon.com/cloudformation/?did=ft_card2&trk=ft_cloudformation

---

### AWS CloudTrail

AWS CloudTrail is a service that records API calls and related events made by users, roles, or AWS services within your AWS account, providing a historical record of actions taken. This continuous logging and monitoring capability is essential for security analysis, resource change tracking, and compliance auditing. For example, CloudTrail can help you detect unauthorized access attempts, understand how your AWS resources were modified, troubleshoot operational issues by reviewing the sequence of API calls, and demonstrate compliance with regulatory requirements by maintaining an audit trail. It offers a comprehensive overview of activity, enabling you to answer questions like "Who did what, when, and to which resource?"

🔗 https://aws.amazon.com/cloudtrail/?did=ft_card2&trk=ft_cloudtrail

---

### AWS Control Tower

AWS Control Tower simplifies the creation and management of secure, multi-account AWS environments. It automates the setup of a landing zone, which is a well-architected, multi-account environment ready for your workloads. Control Tower enforces guardrails, providing automated preventive and detective policies to ensure compliance and security across your accounts. This is ideal for organizations needing to provision new AWS accounts quickly while maintaining robust governance, compliance, and security standards from the outset, enabling teams to innovate faster within a controlled framework.

🔗 https://aws.amazon.com/controltower/?did=ft_card2&trk=ft_controltower

---

### AWS License Manager

AWS License Manager helps you manage, discover, and proactively report on your third-party license usage across your AWS and on-premises environments. It allows you to define licensing rules and track license consumption for software such as Windows Server, SQL Server, and other commercial products, ensuring compliance and preventing cost overruns. Use cases include centralizing license tracking, setting up automated alerts for potential license violations, and optimizing license allocation for servers and instances. By providing a unified view of your license inventory, License Manager empowers you to make informed decisions about software procurement and deployment, ultimately reducing licensing risks and costs.

🔗 https://aws.amazon.com/license-manager/?did=ft_card2&trk=ft_license-manager

---

### AWS re:Post

AWS re:Post is a community-driven question-and-answer platform designed to help AWS customers overcome technical challenges. It allows users to find solutions to problems by searching existing questions, or to ask new questions and receive answers from a global community of AWS experts and fellow users. Use cases include troubleshooting common AWS errors, seeking guidance on best practices for specific services, understanding complex configurations, and learning how to implement new features. Whether you're a beginner encountering your first obstacle or an experienced architect refining your deployment, re:Post provides a collaborative space for knowledge sharing and problem resolution, accelerating your journey with AWS.

🔗 https://www.repost.aws/?did=ft_card2&trk=ft_repost

---

### AWS Resource Explorer

AWS Resource Explorer simplifies resource management by enabling you to quickly search for and discover your AWS resources across multiple regions.  This service acts as a centralized, searchable index of your cloud assets, making it significantly easier to locate specific instances, databases, or other services without manually checking each region.  Its primary use cases include quickly finding a resource when its exact location is forgotten, auditing your AWS environment to understand your resource inventory, and onboarding new team members by providing a unified view of available resources. By consolidating this information, Resource Explorer reduces operational overhead and improves overall visibility and control over your AWS landscape.

🔗 https://aws.amazon.com/resourceexplorer/?did=ft_card2&trk=ft_resourceexplorer

---

### AWS Systems Manager

AWS Systems Manager is a unified operations hub that centralizes operational data and automates management tasks across your AWS resources. It allows you to gain visibility into your infrastructure, monitor operational health, and take action to resolve issues. You can use Systems Manager to patch instances, run commands, manage configurations, and automate deployments, all from a single interface. This helps reduce manual effort, improve consistency, and enhance the security and compliance posture of your AWS environment. For example, you can schedule patch deployments across a fleet of EC2 instances or quickly execute a diagnostic script on a group of servers to troubleshoot problems efficiently.

🔗 https://aws.amazon.com/systems-manager/?did=ft_card2&trk=ft_systemsmanager

<br><br>
## ✈️ Migration

### AWS Application Migration Service

AWS Application Migration Service (AWS MGN) automates the process of migrating your on-premises servers to AWS, significantly simplifying and accelerating the transition. It uses block-level replication to continuously copy your source servers to AWS with minimal downtime. This service is ideal for migrating any workload, from simple web applications to complex, multi-tier enterprise systems, with minimal disruption. AWS MGN reduces the complexity, time, and cost associated with migrations, allowing you to quickly leverage the scalability, agility, and cost-effectiveness of the AWS cloud without extensive re-architecting.

🔗 https://aws.amazon.com/application-migration-service/?did=ft_card2&trk=ft_appmigration

---

### AWS Service Catalog

AWS Service Catalog allows organizations to create and manage catalogs of IT services that are pre-approved for use on AWS. This ensures that users can only deploy resources that comply with company standards and best practices, simplifying governance and reducing risk.  Common use cases include providing developers with approved Amazon Machine Images (AMIs) and database configurations, or enabling business users to provision pre-defined cloud environments for projects, while maintaining IT control and compliance. It streamlines the deployment of approved applications and infrastructure, fostering agility without compromising security or cost management.

🔗 https://aws.amazon.com/servicecatalog/?did=ft_card2&trk=ft_servicecatalog

---

### AWS Transform

AWS Transform is an AI-powered service designed to accelerate the modernization of legacy systems. It acts as an intelligent agent capable of understanding and transforming complex codebases and infrastructure from environments like Windows, mainframes, and VMware.  This allows organizations to migrate applications to modern cloud architectures, such as containers or serverless, more efficiently and with reduced manual effort.  Key use cases include refactoring monolithic applications, migrating databases, and modernizing application code to leverage cloud-native services, ultimately reducing technical debt and enabling faster innovation.

🔗 https://aws.amazon.com/transform/?did=ft_card2&trk=ft_transform

---

### Migration Evaluator

AWS Migration Evaluator is a free service that quickly provides a detailed, total cost of ownership (TCO) analysis for migrating your on-premises IT infrastructure to AWS. It analyzes your current environment to project the cost savings and operational efficiencies you can expect. This tool is invaluable for businesses planning their cloud migration, enabling them to understand the financial implications and build a strong business case for moving to AWS. Use cases include initial migration planning, budget justification, and comparing the costs of different AWS service configurations before committing to a migration path, ultimately empowering data-driven decisions for a smoother and more cost-effective cloud journey.

🔗 https://aws.amazon.com/migration-evaluator/?did=ft_card2&trk=ft_migeval

<br><br>

   
     
   ## Related: Always Free tiers in other clouds
   
   🟦 Microsoft Azure Always Free
   https://zenn.dev/good_sleeper/articles/azure-always-free-en
   
   
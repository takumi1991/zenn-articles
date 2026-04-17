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

AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You simply upload your code, and Lambda automatically handles the underlying infrastructure, scaling it up or down to match incoming requests. This means you only pay for the compute time you actually consume, making it highly cost-effective. Lambda is ideal for a wide range of applications, including building event-driven architectures, processing data streams, creating backend APIs for web and mobile apps, and automating IT tasks. Its ability to trigger code in response to various AWS events, like changes in an S3 bucket or an API Gateway request, makes it incredibly flexible for modern cloud development.

🔗 https://aws.amazon.com/lambda/?did=ft_card2&trk=ft_lambda

<br><br>
## 🗄️ Storage

### Amazon SimpleDB

Amazon SimpleDB is a flexible, highly available, and schemaless NoSQL database service that simplifies data management by handling infrastructure and administration tasks. It's ideal for applications needing simple attribute-value storage with minimal administration, such as storing metadata for web applications, managing user profiles, or logging application events. SimpleDB excels in scenarios where data structure may evolve, or when you need a straightforward, scalable solution for data that doesn't require complex relational queries. Its ease of use and managed nature make it a cost-effective choice for many smaller or rapidly developing applications.

🔗 https://aws.amazon.com/simpledb/?did=ft_card2&trk=ft_simpledb

<br><br>
## 🧱 Database

### Amazon Aurora

Amazon Aurora is a fully managed, relational database service that delivers high performance and availability, compatible with MySQL and PostgreSQL. It is designed for demanding workloads, offering up to five times the throughput of standard MySQL and three times that of standard PostgreSQL, while automatically scaling storage and compute resources to meet application needs without downtime. Aurora excels in use cases requiring rapid growth, consistent performance, and robust availability, such as transactional applications, e-commerce platforms, and SaaS applications where database performance and scalability are critical for user experience and business operations. Its serverless option further simplifies management by automatically provisioning and scaling database capacity.

🔗 https://aws.amazon.com/rds/aurora/

---

### Amazon DynamoDB

Amazon DynamoDB is a fully managed, serverless NoSQL database that provides single-digit millisecond performance for applications at any scale. Its flexible schema and ability to handle massive amounts of data make it ideal for use cases like online gaming leaderboards, personalized recommendations, mobile application backends, and IoT data management. Developers can leverage DynamoDB's automatic scaling, high availability, and built-in security features to build robust and responsive applications without managing any database infrastructure. This allows for rapid development and predictable performance for demanding workloads.

🔗 https://aws.amazon.com/dynamodb/?did=ft_card2&trk=ft_dynamodb

<br><br>
## 🧩 Application Integration

### Amazon Cognito

Amazon Cognito is a managed service that provides secure user sign-up, sign-in, and access control for your web and mobile applications. It simplifies the complex task of managing user identities, allowing you to easily add user authentication, authorization, and management to your applications without managing your own identity infrastructure. Cognito is ideal for use cases like enabling users to sign up and log in with email and password, social media accounts (e.g., Google, Facebook), or enterprise identity providers. It also supports multi-factor authentication for enhanced security and can integrate with AWS services like Amazon API Gateway and AWS Lambda to authorize access to your backend resources based on user identity.

🔗 https://aws.amazon.com/cognito/?did=ft_card2&trk=ft_cognito

---

### Amazon EventBridge

Amazon EventBridge is a serverless event bus service that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. It acts as a central hub for routing events, allowing you to build sophisticated, event-driven architectures without managing infrastructure.  Common use cases include triggering automated workflows in response to application activity, like updating a database when a new customer signs up, or orchestrating microservices by reacting to events from other services. EventBridge also facilitates integrating third-party SaaS applications into your AWS environment by transforming and routing their events. This enables you to react to changes and initiate actions across your entire application landscape dynamically.

🔗 https://aws.amazon.com/eventbridge/?did=ft_card2&trk=ft_eventbridge

---

### Amazon SNS

Amazon Simple Notification Service (SNS) is a fully managed, publish/subscribe messaging service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It allows you to fan out messages to a large number of subscribers, including application-to-application and application-to-person communication. Use cases include instant message delivery to users via SMS, email, or mobile push notifications, as well as triggering automated workflows, sending alerts from monitoring systems, and distributing updates to distributed applications. SNS provides durable message storage, guarantees message delivery, and supports a wide range of endpoints, making it a reliable choice for asynchronous communication.

🔗 https://aws.amazon.com/sns/?did=ft_card2&trk=ft_sns

---

### Amazon SQS

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It acts as a buffer, storing messages reliably until they can be processed by downstream applications, ensuring that components of your system can operate independently. This is incredibly useful for scenarios like processing e-commerce orders, batching tasks for background jobs, and managing asynchronous workflows where sending and receiving components may operate at different paces. By removing the need for applications to be constantly available to receive messages, SQS enhances resilience and scalability.

🔗 https://aws.amazon.com/sqs/?did=ft_card2&trk=ft_sqs

---

### Amazon SWF

Amazon Simple Workflow Service (SWF) is a cloud-based orchestration service that helps developers coordinate distributed components in applications. SWF tracks the execution of tasks and manages their state, ensuring that complex workflows proceed reliably. It's ideal for building applications that require multiple steps, such as order processing systems, financial transactions, or batch data processing, where ensuring each step completes successfully and in the correct order is crucial. By abstracting away the complexities of managing task flow, retries, and error handling, SWF allows developers to focus on the core business logic of their applications.

🔗 https://aws.amazon.com/swf/?did=ft_card2&trk=ft_swf

---

### AWS Step Functions

AWS Step Functions is a serverless orchestration service that allows you to coordinate the components of distributed applications and microservices using visual workflows. It enables you to design, build, and execute complex state machine-based workflows that can automate and manage various AWS services. Step Functions is ideal for use cases like automating IT tasks, building data processing pipelines, orchestrating microservices, and handling application error management and retries. By providing a visual way to define your application's flow, it simplifies the development of robust and scalable distributed systems, making it easier to track and debug your application logic.

🔗 https://aws.amazon.com/step-functions/?did=ft_card2&trk=ft_stepfunctions

<br><br>
## 🌐 Networking

### Amazon CloudFront

Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. It works by caching your content at edge locations worldwide, bringing it closer to your users. This ensures that when a user requests your content, it is served from the nearest edge location, significantly reducing loading times. CloudFront is ideal for distributing static and dynamic web content, streaming video, delivering software, and accelerating API requests. By distributing your content globally, it improves user experience, scales automatically to meet demand, and can help reduce the load on your origin servers, making it a cost-effective solution for high-traffic websites and applications.

🔗 https://aws.amazon.com/cloudfront/?did=ft_card2&trk=ft_cloudfront

---

### Amazon Route 53

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service that translates human-readable domain names into numerical IP addresses that computers use to connect to each other. It allows you to register and manage domain names, route internet traffic to AWS resources like EC2 instances and S3 buckets, and to your own infrastructure. Use cases include directing users to your website, managing complex traffic routing policies such as weighted routing for A/B testing, and providing health checks to automatically reroute traffic away from unhealthy endpoints. Route 53 also enables you to configure DNS security with DNSSEC.

🔗 https://aws.amazon.com/route53/?did=ft_card2&trk=ft_route53

<br><br>
## 🔐 Security

### AWS Certificate Manager

AWS Certificate Manager (ACM) simplifies the process of provisioning, deploying, and managing SSL/TLS certificates across your AWS, hybrid, and multicloud environments.  It allows you to easily obtain free public certificates from trusted Certificate Authorities or import your own private certificates.  ACM integrates seamlessly with various AWS services like Elastic Load Balancing, Amazon CloudFront, and API Gateway, enabling you to secure your websites, applications, and APIs with encrypted HTTPS connections. This automation streamlines certificate renewal, reducing manual effort and the risk of expired certificates impacting your service availability.

🔗 https://aws.amazon.com/certificate-manager/?did=ft_card2&trk=ft_certmanager

---

### AWS Key Management Service

AWS Key Management Service (KMS) is a powerful, managed service that simplifies the creation and control of encryption keys. It allows you to easily encrypt your data across various AWS services, and even outside of AWS, using cryptographic keys that you manage. KMS handles the secure generation, storage, and management of these keys, abstracting away the complexities of underlying hardware security modules. Common use cases include protecting sensitive customer data in databases, encrypting data at rest in S3 buckets, securing configuration files, and ensuring compliance with data privacy regulations. By providing centralized key management with robust auditing capabilities, KMS empowers you to maintain strong security and control over your sensitive information.

🔗 https://aws.amazon.com/kms/?did=ft_card2&trk=ft_kms

---

### AWS Resource Access Manager

AWS Resource Access Manager (RAM) is a service that enables you to securely share your AWS resources, such as Amazon VPC subnets, AWS License Manager resources, and Amazon Machine Images (AMIs), with other AWS accounts. This is incredibly useful for organizations with multiple accounts that need to collaborate on shared infrastructure, development environments, or centralized resource pools without duplicating resources. For example, you can share a VPC subnet with a development account, allowing them to deploy resources within your network, or share a custom AMI with multiple accounts for consistent deployment. RAM simplifies resource management and promotes efficient utilization across your AWS environment, eliminating the need for complex manual configurations.

🔗 https://aws.amazon.com/ram/?did=ft_card2&trk=ft_resourceaccess

---

### AWS Security Incident Response

AWS Security Incident Response is a managed service designed to automate your security incident response process, providing expert guidance throughout.  It helps organizations quickly detect, investigate, and remediate security threats by orchestrating automated response actions and offering access to AWS security professionals. This service is particularly useful for detecting and responding to compromised accounts, identifying and mitigating data exfiltration attempts, and responding to distributed denial-of-service (DDoS) attacks. By leveraging this service, you can significantly reduce the time it takes to contain and resolve security incidents, minimizing potential damage and operational disruption.

🔗 https://aws.amazon.com/security-incident-response/?did=ft_card2&trk=ft_security-incident-response

---

### AWS Shield

AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards your applications and networks from malicious traffic. It automatically deflects common, frequently occurring network and transport layer DDoS attacks. AWS Shield Standard is automatically included with all AWS customers at no additional cost, offering always-on detection and automatic inline mitigations against the most common, application-layer and network-layer DDoS attacks. For enhanced protection, AWS Shield Advanced provides expanded detection and mitigation capabilities, real-time visibility into DDoS attacks, and integration with AWS WAF (Web Application Firewall) to block malicious web requests. This makes it invaluable for protecting critical applications like websites, APIs, and gaming services from disruptions that can impact user experience and business continuity.

🔗 https://aws.amazon.com/shield/?did=ft_card2&trk=ft_shield

---

### AWS WAF Bot Control

AWS WAF Bot Control is a managed ruleset that automatically identifies and mitigates common and pervasive web bots, protecting your web applications from various automated threats. It can be used to prevent credential stuffing attacks by blocking bots attempting to log into your site, safeguard against content scraping that can steal your valuable data, and stop application-layer DDoS attacks designed to overwhelm your infrastructure. By distinguishing between benign bots, like search engine crawlers, and malicious ones, Bot Control helps ensure a better user experience and maintains the integrity and availability of your web applications.

🔗 https://aws.amazon.com/waf/features/bot-control/?did=ft_card2&trk=ft_WAFbc

<br><br>
## 📊 Analytics

### Amazon DataZone

Amazon DataZone is a cloud-based data catalog and governance service that helps organizations manage and share data across different teams and departments, even those in separate AWS accounts or on-premises environments. It enables users to discover, understand, and access data securely through a self-service portal, while providing tools for data stewards to enforce policies and control access. This streamlines collaboration for use cases like unified business intelligence reporting, cross-functional analytics, and data democratization, ensuring data is discoverable, understandable, and compliant with organizational standards.

🔗 https://aws.amazon.com/datazone/?did=ft_card2&trk=ft_datazone

---

### Amazon OpenSearch Service

Amazon OpenSearch Service provides a secure and cost-effective managed solution that simplifies AI-powered search, observability, and vector database operations. It allows you to easily ingest, store, search, and visualize vast amounts of data.  This service is ideal for use cases such as real-time application monitoring and log analytics for operational insights, as well as powering sophisticated search functionalities for e-commerce platforms and content discovery. Furthermore, it enables you to build generative AI applications by storing and querying embeddings efficiently, facilitating semantic search and recommendation engines.  With Amazon OpenSearch Service, you can focus on deriving value from your data without the overhead of managing infrastructure.

🔗 https://aws.amazon.com/opensearch-service/?did=ft_card2&trk=ft_opensearch

---

### AWS Glue

AWS Glue is a fully managed, cost-effective extract, transform, and load (ETL) service that makes it easy to prepare and move data for analytics. It automatically discovers data, generates code, and manages the execution of ETL jobs across various data stores. Glue can be used to catalog data from diverse sources like S3, RDS, and Redshift, making it readily available for querying. It enables common use cases such as data warehousing, data lake creation and maintenance, and preparing data for machine learning workloads. By automating many of the manual steps involved in data preparation, Glue simplifies and accelerates the process of getting data ready for analysis and insights.

🔗 https://aws.amazon.com/glue/?did=ft_card2&trk=ft_glue

<br><br>
## 🧠 AI

### Amazon Q Business

Amazon Q Business is an AI-powered assistant designed to enhance workplace productivity by securely connecting to your company's data. It allows employees to ask natural language questions about internal documents, systems, and repositories, receiving immediate and relevant answers. Use cases include quickly finding information in company policies, summarizing project updates from shared drives, generating reports based on internal data, and assisting with customer support by accessing knowledge bases. This generative AI tool streamlines workflows and empowers your team with on-demand insights, all while maintaining strict security and access controls for your sensitive business information.

🔗 https://aws.amazon.com/q/business/?did=ft_card2&trk=ft_qbusiness

---

### Amazon Q Developer

Amazon Q Developer is a generative AI-powered assistant designed to significantly enhance software development productivity. It streamlines tasks by understanding your codebase, providing intelligent code suggestions, identifying and fixing bugs, and even generating new code based on your prompts. Use it to accelerate coding, automate repetitive tasks like writing unit tests or documentation, and gain insights into your application's behavior. This powerful tool integrates with your existing development workflows, acting as a knowledgeable pair programmer to help you build and maintain software more efficiently.

🔗 https://aws.amazon.com/q/developer/?did=ft_card2&trk=ft_q

---

### AWS HealthLake

AWS HealthLake is a HIPAA-eligible service that enables healthcare providers and independent software vendors to store, transform, transact, and analyze health data in minutes. It allows you to build applications that ingest and process data from various sources like electronic health records (EHRs) and medical imaging, standardizing it into a FHIR (Fast Healthcare Interoperability Resources) format. This facilitates a unified view of patient information, powering use cases such as population health analytics, identifying at-risk patients for proactive interventions, and accelerating clinical research by providing secure access to de-identified datasets for discovery. HealthLake simplifies the complex task of managing and extracting value from fragmented health information.

🔗 https://aws.amazon.com/healthlake?did=ft_card2&trk=ft_healthlake

<br><br>
## 🛠️ Developer Tools

### Amazon CloudWatch

Amazon CloudWatch is a comprehensive monitoring and observability service for AWS cloud resources and applications. It collects and tracks metrics, collects and monitors log files, and sets alarms based on thresholds.  This allows you to gain visibility into the performance and operational health of your systems. You can use CloudWatch to track resource utilization like CPU, memory, and network traffic for services such as EC2 instances and RDS databases. It's also invaluable for troubleshooting application issues by analyzing log data from services like Lambda and containers, and for triggering automated actions, such as scaling instances or sending notifications, when predefined conditions are met.

🔗 https://aws.amazon.com/cloudwatch/?did=ft_card2&trk=ft_cloudwatch

---

### Amazon CodeCatalyst

Amazon CodeCatalyst is a cloud-based service that streamlines the software development lifecycle, enabling teams to build and deliver applications on AWS more efficiently. It provides a unified environment with integrated tools for planning, coding, building, testing, and deploying applications.  Common use cases include developing microservices, deploying web applications, and managing complex CI/CD pipelines for cloud-native solutions. By automating repetitive tasks and fostering collaboration, CodeCatalyst helps developers focus on innovation and accelerate their time to market, making it ideal for organizations aiming to build and deliver apps at scale.

🔗 https://aws.amazon.com/codecatalyst/?did=ft_card2&trk=ft_codecatalyst

---

### AWS CodeArtifact

AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share software packages used in their development processes. It supports popular package managers like npm, Maven, PyPI, and NuGet, allowing developers to integrate CodeArtifact seamlessly into their existing workflows. This service is ideal for managing internal libraries, third-party dependencies, and proprietary code, ensuring version control and access control for improved security and compliance. By centralizing package management, CodeArtifact helps streamline build processes, reduce the risk of using unverified dependencies, and promote collaboration across development teams.

🔗 https://aws.amazon.com/codeartifact/?did=ft_card2&trk=ft_codeartifact

---

### AWS CodeBuild

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready to deploy. It eliminates the need for you to provision, manage, and scale your own build servers. Developers can use CodeBuild to automate build and test processes for a variety of applications, including web apps, mobile apps, and microservices, streamlining their software development lifecycle. It integrates seamlessly with other AWS services like CodeCommit, CodePipeline, and S3, facilitating a complete CI/CD pipeline for faster and more reliable software releases.

🔗 https://aws.amazon.com/codebuild/?did=ft_card2&trk=ft_codebuild

---

### AWS CodePipeline

AWS CodePipeline is a fully managed continuous delivery service that automates your release pipelines for fast and reliable application and infrastructure updates. It orchestrates the build, test, and deploy phases of your release process, enabling you to move from code commit to production quickly and with confidence. Use cases include continuous integration and continuous delivery (CI/CD) for web applications, mobile apps, microservices, and infrastructure as code deployments. By integrating with services like CodeCommit, CodeBuild, and CodeDeploy, CodePipeline visualizes your entire release workflow, allowing you to track changes, identify bottlenecks, and ensure consistent, high-quality software delivery.

🔗 https://aws.amazon.com/codepipeline/?did=ft_card2&trk=ft_codepipeline

---

### AWS X-Ray

AWS X-Ray is a service that helps developers analyze and debug distributed applications. It traces requests as they travel through your application's services, providing an end-to-end view of request flows and identifying performance bottlenecks or errors. Developers can use X-Ray to understand how their application is performing in real-time and to pinpoint the root causes of issues, whether it's slow database queries, misconfigured services, or unhandled exceptions. It's particularly useful for microservices architectures and serverless applications where understanding the interactions between various components is crucial for troubleshooting and optimization. X-Ray aids in improving application performance and reliability by offering deep visibility into the request lifecycle.

🔗 https://aws.amazon.com/xray/?did=ft_card2&trk=ft_xray

<br><br>
## 🏛️ Management & Governance

### Amazon Managed Service for Prometheus

Amazon Managed Service for Prometheus (AMP) is a fully managed Prometheus-compatible service that allows you to easily monitor and alert on containerized applications. It automatically discovers and scrapes metrics from your applications, storing them in a scalable and secure time-series database. AMP is ideal for use cases such as real-time application performance monitoring, identifying performance bottlenecks, troubleshooting issues in production environments, and establishing custom alerts to notify you of critical events. By abstracting away the operational burden of managing a Prometheus server, AMP enables you to focus on your applications rather than infrastructure.

🔗 https://aws.amazon.com/prometheus/?did=ft_card2&trk=ft_msfp

---

### AWS Budgets

AWS Budgets helps you plan and control your AWS spending by allowing you to set custom budgets and receive alerts when your costs or usage exceed predefined thresholds. You can track your spending against these budgets in real-time, identify cost-saving opportunities, and forecast your future expenses based on current trends. Common use cases include setting budgets for specific projects, teams, or services to prevent unexpected costs, monitoring reserved instance or savings plan utilization to ensure optimal value, and establishing alerts to proactively manage budget overruns. This service empowers organizations to gain visibility into their AWS costs and maintain financial discipline.

🔗 https://aws.amazon.com/aws-cost-management/aws-budgets/?did=ft_card2&trk=ft_budgets

---

### AWS CloudFormation

AWS CloudFormation is a service that lets you model and provision your Amazon Web Services and third-party application resources using a declarative template. You define your entire infrastructure, from compute and storage to networking and databases, in a template file, often written in JSON or YAML. CloudFormation then automatically provisions and configures those resources according to your template. This enables you to treat your infrastructure as code, facilitating version control, repeatable deployments, and efficient management of your AWS environment. Use cases include automating the setup of new application environments, managing complex multi-tier applications, and ensuring consistent configurations across different accounts and regions for compliance and faster troubleshooting.

🔗 https://aws.amazon.com/cloudformation/?did=ft_card2&trk=ft_cloudformation

---

### AWS CloudTrail

AWS CloudTrail is a service that enables you to log, continuously monitor, and retain account activity and API usage across your AWS infrastructure. It records actions taken by users, roles, or AWS services, providing a history of what happened, when, and by whom. This is invaluable for security analysis, troubleshooting operational issues, and demonstrating compliance with regulatory requirements. For instance, CloudTrail helps you detect unauthorized access attempts, track changes to your resources for auditing purposes, and pinpoint the source of configuration errors. By centrally logging these events, you gain essential visibility into your AWS environment for enhanced governance and security posture.

🔗 https://aws.amazon.com/cloudtrail/?did=ft_card2&trk=ft_cloudtrail

---

### AWS Control Tower

AWS Control Tower simplifies the setup and ongoing governance of a secure, multi-account AWS environment. It automates the creation of a landing zone, which includes establishing a robust account structure, pre-configured security policies, and logging capabilities. This allows organizations to provision new AWS accounts quickly and confidently, ensuring compliance with their security and governance best practices. Control Tower is ideal for companies seeking to manage multiple teams or projects on AWS with consistent security guardrails, facilitate departmental cost allocation, or implement a secure foundation for sensitive workloads, all while maintaining centralized visibility and control.

🔗 https://aws.amazon.com/controltower/?did=ft_card2&trk=ft_controltower

---

### AWS License Manager

AWS License Manager helps organizations proactively manage, discover, and report on their third-party software license usage. It allows you to define rules to govern how your licenses are used, preventing costly over-deployment or under-licensing.  Common use cases include tracking licenses for popular software like Microsoft SQL Server or Oracle databases running on AWS, ensuring compliance with vendor agreements, and optimizing spending by identifying underutilized licenses.  By centralizing license management, License Manager provides visibility and control, simplifying audits and reducing the risk of license-related violations.

🔗 https://aws.amazon.com/license-manager/?did=ft_card2&trk=ft_license-manager

---

### AWS re:Post

AWS re:Post is a community-driven question-and-answer platform designed to help AWS customers overcome technical challenges and accelerate their cloud journey.  It allows users to ask questions about any AWS service and receive answers from a global community of fellow AWS users, AWS experts, and Amazon employees.  Common use cases include troubleshooting common errors, seeking advice on best practices for architecture design, understanding complex service configurations, and discovering innovative solutions to cloud-related problems. By fostering knowledge sharing, re:Post empowers individuals and organizations to resolve technical roadblocks efficiently and learn from the collective experience of the AWS ecosystem.

🔗 https://www.repost.aws/?did=ft_card2&trk=ft_repost

---

### AWS Resource Explorer

AWS Resource Explorer is a service that helps you easily search for and discover your AWS resources across multiple AWS Regions. You can quickly find specific resources like EC2 instances, S3 buckets, or RDS databases by using keywords, tags, or resource types. This is particularly useful for managing large or complex AWS environments, troubleshooting issues, or when you need to quickly locate resources before performing an action such as deletion or configuration changes. Resource Explorer aggregates resource metadata, allowing you to create a unified view of your inventory and reduce the time spent navigating through different AWS services and Regions to find what you need.

🔗 https://aws.amazon.com/resourceexplorer/?did=ft_card2&trk=ft_resourceexplorer

---

### AWS Service Catalog

AWS Service Catalog allows organizations to create and manage catalogs of approved IT services, including applications, software, and infrastructure, for use on AWS. This ensures consistency and compliance by providing a curated and governed selection of resources that end-users can provision through a self-service portal. Common use cases include deploying standardized development environments, onboarding new applications with pre-approved configurations, and enabling business users to access IT resources without requiring extensive technical expertise, thereby accelerating deployment cycles and reducing operational overhead. It helps maintain security and governance by offering pre-approved and configured services, reducing shadow IT, and ensuring adherence to organizational policies.

🔗 https://aws.amazon.com/servicecatalog/?did=ft_card2&trk=ft_servicecatalog

---

### AWS Systems Manager

AWS Systems Manager is a unified interface that provides visibility and control over your AWS infrastructure, allowing you to centralize operational data and automate tasks. It helps manage your servers, virtual machines, and other AWS resources by offering capabilities like patching, configuration management, and remote command execution. For instance, you can use Systems Manager to automate OS updates across hundreds of instances, deploy application configurations consistently, or even run custom scripts to troubleshoot issues without direct access. This service streamlines operations, enhances security posture, and improves overall efficiency by providing a single pane of glass for managing your AWS environment.

🔗 https://aws.amazon.com/systems-manager/?did=ft_card2&trk=ft_systemsmanager

<br><br>
## ✈️ Migration

### AWS Application Migration Service

AWS Application Migration Service (AWS MGN) is a managed service designed to simplify and accelerate the migration of your on-premises applications to AWS with minimal disruption and reduced cost. It automates the server conversion process, enabling you to replicate your servers to AWS with continuous, block-level replication.  This allows you to perform test cutovers and then cut over to AWS with minimal downtime.  AWS MGN is ideal for migrating large volumes of servers, re-platforming applications, or for disaster recovery scenarios. Its automated nature reduces manual effort and the risk of human error, making migrations more predictable and cost-effective.

🔗 https://aws.amazon.com/application-migration-service/?did=ft_card2&trk=ft_appmigration

---

### AWS Transform

AWS Transform is an agentic AI service designed to accelerate the modernization of legacy systems. It helps organizations migrate and transform applications from diverse environments like Windows, mainframes, and VMware to cloud-native architectures.  This service automates complex migration tasks, reducing manual effort and speeding up the transition. Key use cases include refactoring monolithic applications into microservices, re-platforming databases, and modernizing user interfaces. By leveraging AI agents, AWS Transform intelligently analyzes existing code and infrastructure, generating optimized target code and configurations, thereby enabling businesses to unlock the agility and scalability of the cloud more rapidly.

🔗 https://aws.amazon.com/transform/?did=ft_card2&trk=ft_transform

---

### Migration Evaluator

AWS Migration Evaluator is a service designed to quickly estimate the potential cost of migrating your existing on-premises infrastructure to the AWS cloud. By analyzing your current hardware and software inventory, it generates a detailed report projecting your future AWS spending. This is particularly useful for organizations planning cloud adoption, enabling them to understand the financial implications before committing resources. It aids in budget forecasting, comparing AWS costs against on-premises expenditures, and identifying potential cost savings. Businesses can leverage Migration Evaluator to build a solid business case for their cloud migration strategy, ensuring they are prepared for the financial shift.

🔗 https://aws.amazon.com/migration-evaluator/?did=ft_card2&trk=ft_migeval

<br><br>

   
     
   ## Related: Always Free tiers in other clouds
   
   Azure Always Free
   👉 https://zenn.dev/good_sleeper/articles/azure-always-free-en
   
   
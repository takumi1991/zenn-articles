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

AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You simply upload your code, and Lambda handles all the infrastructure, automatically scaling your application by running your code in response to events. This makes it ideal for a wide range of use cases, such as building real-time file processing, detecting anomalies with machine learning, data transformation, and creating backends for web and mobile applications. You only pay for the compute time you consume, making it a cost-effective solution for event-driven workloads and applications that experience unpredictable traffic.

🔗 https://aws.amazon.com/lambda/?did=ft_card2&trk=ft_lambda

<br><br>
## 🧱 Database

### Amazon Aurora

Amazon Aurora is a fully managed, MySQL and PostgreSQL-compatible relational database service designed for unparalleled performance and availability. It offers up to five times the throughput of standard MySQL and three times the throughput of standard PostgreSQL, while automatically scaling storage and compute resources to meet application demands. Aurora is ideal for demanding transactional workloads, cloud-native applications, and for organizations seeking to migrate from existing on-premises databases without requiring significant application rewrites. Its serverless option further simplifies management by automatically starting, stopping, and scaling database capacity in response to application needs, making it cost-effective for intermittent or unpredictable workloads.

🔗 https://aws.amazon.com/rds/aurora/

---

### Amazon SimpleDB

Amazon SimpleDB is a highly available, managed NoSQL database service that simplifies data storage and retrieval for web applications by offloading administrative tasks. It offers a flexible, schema-less data model, making it ideal for applications where data structure may evolve or is unpredictable. Common use cases include storing product catalogs, user profiles, and session data, as well as managing game scores or inventory. Its ease of use and scalability make it a good choice for developers looking for a straightforward solution to manage large amounts of unstructured or semi-structured data without the burden of managing complex database infrastructure.

🔗 https://aws.amazon.com/simpledb/?did=ft_card2&trk=ft_simpledb

<br><br>
## 🧩 Application Integration

### Amazon DynamoDB

Amazon DynamoDB is a fully managed, serverless NoSQL database service that provides single-digit millisecond performance at any scale. It's ideal for applications requiring fast, predictable performance with low latency, such as e-commerce platforms, gaming leaderboards, IoT data collection, and real-time bidding systems. DynamoDB automatically scales to handle massive amounts of data and traffic, eliminating the need for manual database administration. Its flexible schema and pay-as-you-go pricing make it a cost-effective solution for a wide range of use cases, from small applications to enterprise-level workloads.

🔗 https://aws.amazon.com/dynamodb/?did=ft_card2&trk=ft_dynamodb

---

### Amazon EventBridge

Amazon EventBridge is a serverless event bus that makes it easy to connect applications using data from your own applications, integrated AWS services, and SaaS partners. It enables you to build sophisticated, event-driven architectures by routing events from sources to targets without writing custom code.  Common use cases include responding to changes in AWS services, automating workflows based on application events, and integrating disparate systems. For example, you can trigger a Lambda function when a new file is uploaded to S3, or send notifications to Slack when a customer updates their profile in a SaaS application. EventBridge offers powerful filtering capabilities to ensure only relevant events reach your applications, allowing you to scale event-driven architectures efficiently.

🔗 https://aws.amazon.com/eventbridge/?did=ft_card2&trk=ft_eventbridge

---

### Amazon SNS

Amazon Simple Notification Service (SNS) is a fully managed, fast, and flexible messaging service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It allows you to send messages to a large number of subscribers simultaneously, acting as a fan-out mechanism. Common use cases include triggering alerts based on system metrics, sending notifications to mobile devices or email addresses, and coordinating workflows between different application components. SNS can integrate with a variety of AWS services, further enhancing its capabilities for building robust and reactive applications.

🔗 https://aws.amazon.com/sns/?did=ft_card2&trk=ft_sns

---

### Amazon SQS

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS acts as a buffer for messages, reliably storing them until they are ready to be processed by downstream applications. This helps ensure that your applications can handle varying loads without losing messages. Common use cases include asynchronous processing of tasks, decoupling components in a microservices architecture, and managing workflows where tasks need to be processed in a specific order or at a controlled pace. It simplifies building applications by eliminating the need to manage dedicated message brokers, allowing developers to focus on their application logic.

🔗 https://aws.amazon.com/sqs/?did=ft_card2&trk=ft_sqs

---

### Amazon SWF

Amazon Simple Workflow Service (SWF) is a task coordination and state management service that helps developers build and execute complex distributed applications. SWF manages the execution flow of your application's tasks, ensuring that they are performed in the correct order and that the overall state of your workflow is maintained.  Common use cases include human-in-the-loop processes, background job processing, and data processing pipelines where tasks may be long-running, dependent on each other, or require manual intervention. SWF handles the complexities of reliably coordinating these distributed tasks, making it easier to build robust and scalable cloud applications.

🔗 https://aws.amazon.com/swf/?did=ft_card2&trk=ft_swf

---

### AWS Step Functions

AWS Step Functions is a serverless orchestration service that helps you coordinate the components of distributed applications and microservices using visual workflows. It allows you to build complex business processes by stringing together AWS Lambda functions, other AWS services, and even your own custom code. Step Functions makes it easy to manage sequences, parallel tasks, conditional logic, and error handling. Common use cases include automating IT tasks, building data processing pipelines, orchestrating microservice interactions, and managing long-running processes. By providing a managed, visual way to design and execute workflows, Step Functions simplifies the development and operation of distributed systems.

🔗 https://aws.amazon.com/step-functions/?did=ft_card2&trk=ft_stepfunctions

<br><br>
## 🌐 Networking

### Amazon CloudFront

Amazon CloudFront is a global content delivery network (CDN) that accelerates the delivery of your web content, including static and dynamic files, APIs, and streaming media, to your users worldwide. It caches your content at edge locations geographically closer to your end-users, significantly reducing latency and improving transfer speeds. This makes CloudFront ideal for a wide range of applications, such as serving images and videos on websites, distributing software updates, delivering live and on-demand video streams, and providing fast access to APIs. By leveraging CloudFront, businesses can enhance user experience, boost website performance, and handle traffic spikes effectively.

🔗 https://aws.amazon.com/cloudfront/?did=ft_card2&trk=ft_cloudfront

---

### Amazon Route 53

Amazon Route 53 is a cloud-native Domain Name System (DNS) web service that translates human-readable domain names (like www.example.com) into the IP addresses that computers use to connect to each other. It acts as the phonebook for the internet, directing traffic to your applications and websites. Key use cases include registering domain names, performing health checks on your resources, and routing end-user requests to the most appropriate endpoint based on factors like geographic location, latency, or the health of your services, ensuring high availability and performance for your applications hosted on AWS or elsewhere.

🔗 https://aws.amazon.com/route53/?did=ft_card2&trk=ft_route53

<br><br>
## 🔐 Security

### Amazon Cognito

Amazon Cognito provides simple and secure user sign-up, sign-in, and access control for your web and mobile applications. It allows you to manage users and authenticate them directly through your application, without building or managing your own identity infrastructure. Use cases include enabling social sign-in with providers like Google, Facebook, and Apple, allowing users to create accounts directly with an email and password, and securely controlling access to your application's backend resources using industry-standard protocols like OAuth 2.0 and OpenID Connect. This service scales automatically to handle millions of users, offering a robust and manageable solution for your application's identity needs.

🔗 https://aws.amazon.com/cognito/?did=ft_card2&trk=ft_cognito

---

### AWS Certificate Manager

AWS Certificate Manager (ACM) simplifies the process of provisioning, deploying, and managing public and private SSL/TLS certificates. It allows you to easily obtain, renew, and manage certificates needed to secure your applications and data across AWS, on-premises environments, and other cloud platforms. ACM integrates seamlessly with AWS services like Elastic Load Balancing, Amazon CloudFront, and API Gateway, enabling you to enable secure HTTPS connections for your websites, APIs, and other workloads with minimal effort. This service handles the complexities of certificate lifecycle management, including automatic renewals, ensuring your security posture remains robust without manual intervention.

🔗 https://aws.amazon.com/certificate-manager/?did=ft_card2&trk=ft_certmanager

---

### AWS Key Management Service

AWS Key Management Service (KMS) is a managed service that makes it easy to create and control encryption keys used to encrypt your data. KMS simplifies encryption by providing a centralized, secure, and auditable way to manage these keys. It's commonly used to protect sensitive data stored in services like Amazon S3, Amazon RDS, and Amazon EBS, as well as for encrypting configuration files and secrets. By using KMS, you can ensure your data is protected at rest and in transit, while maintaining granular control over who can access and use your encryption keys, all within a highly available and secure environment.

🔗 https://aws.amazon.com/kms/?did=ft_card2&trk=ft_kms

---

### AWS Resource Access Manager

AWS Resource Access Manager (RAM) allows you to securely share AWS resources, like Amazon Machine Images (AMIs), Amazon Virtual Private Cloud (VPC) subnets, and AWS Transit Gateway, across different AWS accounts or within your AWS Organization without needing to copy or replicate them. This is invaluable for centralizing resource management and simplifying multi-account setups. For example, you can share a custom AMI with multiple development teams in separate accounts for consistent deployments, or grant access to a shared VPC for seamless network connectivity between business units. RAM eliminates the complexity of manual resource duplication, promoting efficiency and reducing operational overhead.

🔗 https://aws.amazon.com/ram/?did=ft_card2&trk=ft_resourceaccess

---

### AWS Security Incident Response

AWS Security Incident Response is a managed service that helps organizations automate their security incident response processes and leverages AWS expert guidance to effectively address and recover from security threats. It's designed to quickly detect, investigate, and remediate security incidents like malware outbreaks, account compromises, or data breaches. Use cases include rapidly containing malicious activity, restoring compromised systems, and reducing the impact of security events. This service integrates with other AWS security tools and provides playbooks for common incident types, enabling organizations to build a more resilient security posture and minimize downtime and data loss during critical events.

🔗 https://aws.amazon.com/security-incident-response/?did=ft_card2&trk=ft_security-incident-response

---

### AWS Shield

AWS Shield is a managed distributed denial of service (DDoS) protection service that safeguards web applications and networks. It works by analyzing network traffic and security configurations to identify and mitigate malicious attacks in real-time, ensuring the availability and performance of your applications.  Key use cases include protecting websites, APIs, and critical infrastructure from volumetric, protocol, and application-layer DDoS attacks.  AWS Shield offers both Standard and Advanced tiers, with the Advanced tier providing more sophisticated defenses, enhanced visibility into attacks, and access to the AWS DDoS Response Team for custom mitigation strategies, particularly beneficial for high-availability applications and sensitive workloads.

🔗 https://aws.amazon.com/shield/?did=ft_card2&trk=ft_shield

---

### AWS WAF Bot Control

AWS WAF Bot Control is a managed ruleset designed to protect your web applications from common and pervasive web bots. It automatically detects and mitigates various bot threats, including those that engage in activities like content scraping, credential stuffing, and spamming. By categorizing bot traffic into manageable, regular, and suspicious types, Bot Control allows you to enforce granular access controls and respond effectively to automated attacks. This is particularly useful for businesses looking to safeguard customer data, prevent unauthorized access to sensitive information, and maintain the integrity of their online services by distinguishing legitimate user traffic from malicious bot activity.

🔗 https://aws.amazon.com/waf/features/bot-control/?did=ft_card2&trk=ft_WAFbc

<br><br>
## 📊 Analytics

### Amazon DataZone

Amazon DataZone is a data governance service that makes it easy for organizations to discover, catalog, and access data securely across different business units and teams. It provides a centralized place for data producers to register and share data assets, while data consumers can search for and request access to the data they need, all within a governed framework. Use cases include enabling self-service analytics for business users, facilitating cross-departmental data collaboration for machine learning projects, and ensuring regulatory compliance by tracking data lineage and access. Amazon DataZone helps break down data silos and empowers users to leverage data effectively while maintaining control and visibility.

🔗 https://aws.amazon.com/datazone/?did=ft_card2&trk=ft_datazone

---

### Amazon OpenSearch Service

Amazon OpenSearch Service is a fully managed offering that simplifies the deployment, operation, and scaling of OpenSearch, an open-source search and analytics suite. It provides a powerful and cost-effective platform for building AI-powered search experiences, analyzing application logs and metrics for observability, and leveraging vector search capabilities for applications like recommendation engines and semantic search.  This service allows you to easily ingest, store, and search vast amounts of data, enabling real-time insights and improved application performance without the overhead of managing the underlying infrastructure.

🔗 https://aws.amazon.com/opensearch-service/?did=ft_card2&trk=ft_opensearch

---

### AWS Glue

AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. It automates the difficult parts of ETL, including discovering data and creating metadata catalogs, transforming data, and loading it into a data store. AWS Glue is serverless, meaning you don't need to manage infrastructure, and you only pay for the resources you use. This makes it a cost-effective solution for a variety of use cases, such as populating data lakes, migrating data to Amazon Redshift or Amazon RDS, and transforming data for machine learning applications.

🔗 https://aws.amazon.com/glue/?did=ft_card2&trk=ft_glue

<br><br>
## 🧠 AI

### Amazon Q Business

Amazon Q Business is an enterprise-grade generative AI assistant designed to enhance workplace productivity by securely connecting to your business data. It can answer complex questions about company information, summarize documents, generate content like emails or reports, and even assist with coding tasks. Use cases include providing instant answers to employee HR or IT queries, accelerating research by summarizing lengthy reports, automating repetitive content creation, and empowering developers with intelligent code generation and debugging. By leveraging your existing knowledge bases, Amazon Q Business allows your organization to harness the power of AI without exposing sensitive information.

🔗 https://aws.amazon.com/q/business/?did=ft_card2&trk=ft_qbusiness

---

### Amazon Q Developer

Amazon Q Developer is a generative AI-powered assistant designed to significantly enhance the software development lifecycle. It helps developers by automating tedious tasks, accelerating code writing, and improving code quality. Use cases include generating code snippets based on natural language prompts, debugging existing code by identifying and suggesting fixes for errors, and refactoring code for better performance and maintainability. Furthermore, Q Developer can translate code between different programming languages and provide intelligent answers to technical questions, making it an invaluable tool for boosting productivity and streamlining development workflows from ideation to deployment.

🔗 https://aws.amazon.com/q/developer/?did=ft_card2&trk=ft_q

<br><br>
## 🛠️ Developer Tools

### Amazon CloudWatch

Amazon CloudWatch is a comprehensive monitoring and observability service for AWS cloud resources and applications. It collects and tracks metrics, collects and monitors log files, and sets alarms. CloudWatch enables you to gain insights into your application's performance and responsiveness, thereby enabling you to respond to potential issues proactively. Use cases include tracking the CPU utilization of an EC2 instance, monitoring the latency of an RDS database, analyzing application logs for errors, and triggering automated actions like scaling up instances when traffic increases. By providing a unified view, CloudWatch helps ensure the health, availability, and performance of your cloud infrastructure and applications.

🔗 https://aws.amazon.com/cloudwatch/?did=ft_card2&trk=ft_cloudwatch

---

### Amazon CodeCatalyst

Amazon CodeCatalyst is a unified, managed service that accelerates application development and delivery on AWS. It simplifies the entire software development lifecycle, from planning and collaboration to building, testing, and deploying applications.  CodeCatalyst provides integrated tools like source control, CI/CD pipelines, and project management, enabling development teams to work more efficiently and deliver high-quality software faster. Use cases include developing microservices, building web applications, modernizing legacy systems, and managing complex cloud-native projects, all while benefiting from automated workflows and improved team collaboration.

🔗 https://aws.amazon.com/codecatalyst/?did=ft_card2&trk=ft_codecatalyst

---

### AWS CodeArtifact

AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share software packages used in their development process. It supports popular package formats like npm, Maven, PyPI, and NuGet, streamlining dependency management across various programming languages and build tools. Developers can use CodeArtifact to create private repositories for their own libraries or consume public repositories in a controlled manner, improving build reproducibility and security by preventing the use of unverified or malicious third-party packages. This service is ideal for teams building applications with complex dependency chains, requiring consistent and secure software supply chains.

🔗 https://aws.amazon.com/codeartifact/?did=ft_card2&trk=ft_codeartifact

---

### AWS CodeBuild

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready to deploy. It eliminates the need to provision, manage, and scale your own build servers, allowing you to focus on developing your applications. CodeBuild integrates seamlessly with other AWS services like CodeCommit, CodeDeploy, and CodePipeline, enabling you to automate your entire software release process. It supports a wide range of programming languages and build tools, making it suitable for various use cases, from simple application builds to complex microservice deployments and container image creation. By handling the infrastructure and scaling, CodeBuild accelerates your development lifecycle and reduces operational overhead.

🔗 https://aws.amazon.com/codebuild/?did=ft_card2&trk=ft_codebuild

---

### AWS CodePipeline

AWS CodePipeline is a fully managed continuous delivery service that automates your release pipelines for fast and reliable application and infrastructure updates. It provides a visual workflow that helps you model and automate the steps required to release your software, from code commit to production. CodePipeline orchestrates various AWS services like CodeCommit for source control, CodeBuild for compiling and testing, and CodeDeploy for deploying applications to various compute services. It's ideal for streamlining development workflows, enabling frequent and consistent software releases, and reducing the risk associated with manual deployment processes across different environments such as development, staging, and production.

🔗 https://aws.amazon.com/codepipeline/?did=ft_card2&trk=ft_codepipeline

---

### AWS X-Ray

AWS X-Ray is a service that helps developers analyze and debug distributed applications by tracing requests as they travel through your application's components. It provides an end-to-end view of request flows, allowing you to identify performance bottlenecks and errors. You can use X-Ray to trace requests across microservices, understand dependencies between services, and pinpoint the root cause of issues. This is particularly useful for applications built on AWS services like Lambda, EC2, and API Gateway, enabling faster troubleshooting and optimization of your application's performance and reliability.

🔗 https://aws.amazon.com/xray/?did=ft_card2&trk=ft_xray

<br><br>
## 🏛️ Management & Governance

### Amazon Managed Service for Prometheus

Amazon Managed Service for Prometheus (AMP) is a fully managed, Prometheus-compatible service designed for monitoring and alerting on containerized applications. It allows you to collect, store, and query metrics from your applications and infrastructure without managing your own Prometheus servers. Use cases include tracking the performance and health of microservices, identifying resource bottlenecks in Kubernetes clusters, and setting up automated alerts for critical application events. AMP seamlessly integrates with other AWS services, simplifying the operational burden and enabling you to focus on analyzing your application's behavior and ensuring its reliability.

🔗 https://aws.amazon.com/prometheus/?did=ft_card2&trk=ft_msfp

---

### AWS Budgets

AWS Budgets helps you plan and control your AWS spending by setting custom budgets and receiving alerts when your costs or usage exceed or are forecasted to exceed your budgeted amounts.  This service is invaluable for financial planning, allowing teams to proactively manage expenses and avoid unexpected bills. You can set budgets for specific services, APIs, or even by tags, enabling granular cost allocation and monitoring.  Whether you need to track monthly spending for the entire organization or set spending limits for development projects, AWS Budgets provides the visibility and control to optimize your cloud economics and ensure you stay within your financial targets.

🔗 https://aws.amazon.com/aws-cost-management/aws-budgets/?did=ft_card2&trk=ft_budgets

---

### AWS CloudFormation

AWS CloudFormation is a service that allows you to define your cloud infrastructure, such as virtual servers, databases, and networks, as code using templates. This enables you to automate the creation, updating, and deletion of your resources in a predictable and repeatable way, ensuring configuration compliance across your environments.  Common use cases include deploying entire applications, managing development and testing environments, and establishing baseline infrastructure configurations. By treating your infrastructure as code, CloudFormation facilitates faster troubleshooting as you can easily track changes and revert to previous known good states.

🔗 https://aws.amazon.com/cloudformation/?did=ft_card2&trk=ft_cloudformation

---

### AWS CloudTrail

AWS CloudTrail is a service that records API calls made in your AWS account, providing a historical record of actions performed on your AWS resources. This continuous logging allows you to monitor user activity, troubleshoot operational issues, and audit changes within your environment. CloudTrail is crucial for security analysis, enabling you to detect unauthorized access or suspicious behavior by reviewing who did what, when, and from where. It also aids in compliance by offering an audit trail for regulatory requirements and helps in understanding resource usage patterns to optimize costs and performance.

🔗 https://aws.amazon.com/cloudtrail/?did=ft_card2&trk=ft_cloudtrail

---

### AWS Control Tower

AWS Control Tower simplifies the setup and ongoing governance of a secure, multi-account AWS environment. It automates the creation of a landing zone, which is a well-architected multi-account setup, providing a strong foundation for your AWS workloads. This service is ideal for organizations looking to quickly establish best practices for security, compliance, and account management. Use cases include onboarding new teams or projects into separate AWS accounts, enforcing organizational policies like data residency or access controls across all accounts, and automating compliance checks against industry standards. Control Tower helps you maintain a consistent and secure environment as your AWS usage grows, ensuring that guardrails are in place to prevent unintended configurations and maintain compliance.

🔗 https://aws.amazon.com/controltower/?did=ft_card2&trk=ft_controltower

---

### AWS License Manager

AWS License Manager helps you manage your software licenses across AWS and on-premises environments. It allows you to set up rules and automation to proactively discover, track, and control your third-party license usage, preventing costly over-licensing or under-licensing.  This service is invaluable for organizations needing to maintain license compliance, optimize software spending, and reduce the risk of license audits.  Use cases include tracking licenses for products like Microsoft SQL Server, Oracle databases, and SAP, ensuring you only pay for what you use and adhere to vendor agreements.

🔗 https://aws.amazon.com/license-manager/?did=ft_card2&trk=ft_license-manager

---

### AWS re:Post

AWS re:Post is a question-and-answer community where AWS customers can get help resolving technical challenges. It's the go-to place to find solutions to complex problems, troubleshoot errors, and discover best practices directly from AWS experts and fellow users. You can use re:Post to ask questions about specific AWS services, share your own expertise, and explore a vast knowledge base of previously answered queries. Whether you're a beginner learning the ropes or an experienced architect facing a unique integration scenario, re:Post empowers you to overcome obstacles and optimize your AWS deployments through collaborative learning.

🔗 https://www.repost.aws/?did=ft_card2&trk=ft_repost

---

### AWS Resource Explorer

AWS Resource Explorer helps you find and discover your AWS resources across different Regions.  Imagine needing to locate a specific EC2 instance or S3 bucket scattered across your accounts and geographical locations; Resource Explorer makes this effortless. You can use it to quickly identify resources for troubleshooting, cost analysis, or simply to understand your overall AWS inventory.  By providing a unified search experience, it saves significant time and effort compared to manually navigating individual services and Regions, streamlining resource management and improving operational efficiency.

🔗 https://aws.amazon.com/resourceexplorer/?did=ft_card2&trk=ft_resourceexplorer

---

### AWS Systems Manager

AWS Systems Manager is a unified management service that provides visibility into and control over your infrastructure on AWS. It helps you centralize operational data from multiple AWS services and automate tasks across your AWS resources, including EC2 instances, on-premises servers, and virtual machines.  You can use Systems Manager to patch and configure your instances, run commands, collect inventory, and manage your systems more efficiently.  Key use cases include automating compliance checks, deploying software, and troubleshooting issues across your entire fleet of resources, ultimately improving operational efficiency and security posture.

🔗 https://aws.amazon.com/systems-manager/?did=ft_card2&trk=ft_systemsmanager

<br><br>
## ✈️ Migration

### AWS Application Migration Service

AWS Application Migration Service (AWS MGN) is a fully managed service that simplifies and expedites the migration of your on-premises or cloud-based applications to AWS. It achieves this by automating the server conversion process, minimizing downtime through continuous, block-level replication, and enabling near-zero downtime cutovers.  AWS MGN is ideal for migrating large-scale enterprise applications, databases, and virtual desktops, helping organizations reduce operational overhead and accelerate their cloud journey with predictable outcomes and lower costs. Its automated approach streamlines the entire migration lifecycle, from initial replication to final cutover, making complex migrations more manageable.

🔗 https://aws.amazon.com/application-migration-service/?did=ft_card2&trk=ft_appmigration

---

### AWS Service Catalog

AWS Service Catalog allows organizations to centrally create and manage a catalog of IT services, including applications, software, and infrastructure, that are pre-approved and ready for deployment on AWS. This empowers IT administrators to govern what users can provision, ensuring compliance with security and configuration standards. Common use cases include onboarding new developers with pre-configured development environments, deploying standardized application stacks, and providing self-service access to approved cloud resources for business units. By offering a curated selection of approved services, Service Catalog streamlines procurement, reduces shadow IT, and accelerates the deployment of cloud resources while maintaining control and governance.

🔗 https://aws.amazon.com/servicecatalog/?did=ft_card2&trk=ft_servicecatalog

---

### AWS Transform

AWS Transform is a pioneering agentic AI service designed to accelerate the modernization of legacy IT environments. It intelligently analyzes and transforms complex systems, including Windows applications, mainframe code, and VMware virtual machines, into modern cloud-native architectures. This service automates significant portions of the migration and refactoring process, reducing manual effort and project timelines. Key use cases include migrating monolithic applications to microservices, updating legacy codebases for improved scalability and maintainability, and transitioning on-premises infrastructure to AWS for enhanced agility and cost efficiency. By leveraging AI-driven insights, AWS Transform streamlines the path to the cloud for organizations seeking to modernize their core IT assets.

🔗 https://aws.amazon.com/transform/?did=ft_card2&trk=ft_transform

---

### Migration Evaluator

AWS Migration Evaluator is a powerful tool that quickly provides projected cost savings and operational benefits of migrating your on-premises IT infrastructure to AWS. It analyzes your existing environment to generate a detailed report, highlighting potential cost reductions, hardware consolidation opportunities, and improved performance by running workloads in the cloud. This service is invaluable for organizations planning to move to AWS, enabling them to build a strong business case for migration, compare on-premises costs with AWS equivalents, and identify the most cost-effective strategies for their cloud journey, whether it's for application modernization, data center exit, or disaster recovery planning.

🔗 https://aws.amazon.com/migration-evaluator/?did=ft_card2&trk=ft_migeval

<br><br>

   
     
   ## Related: Always Free tiers in other clouds
   
   🟦 Microsoft Azure Always Free
   https://zenn.dev/good_sleeper/articles/azure-always-free-en
   
   
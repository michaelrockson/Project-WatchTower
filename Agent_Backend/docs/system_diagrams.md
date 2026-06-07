# Reddit-Mine - System Diagrams

This document outlines the architecture, data flow, and configuration management of Reddit-Mine using
Mermaid diagrams.

## 1. High-Level System Architecture

This diagram illustrates the layered architecture of the agent, highlighting the separation of concerns between
pipelines, services, repositories, and external clients.

![System Diagram 1](diagram_1.png)

## 2. Pipeline Data Flow

The agent operates sequentially through four distinct pipelines. This diagram shows how data transforms from raw Reddit
posts to structured problem briefs.

![System Diagram 2](diagram_2.png)

## 3. Secrets Management (Infisical)

To securely handle credentials (like API keys), the agent injects secrets at startup before other services are
instantiated.

![System Diagram 3](diagram_3.png)

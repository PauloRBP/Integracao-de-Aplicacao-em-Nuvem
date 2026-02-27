---
name: github-api
description: Orchestrates comprehensive GitHub API access across all services. Intelligently routes API operations to specialized resource files covering authentication, repositories, issues/PRs, workflows, security, and more.
version: 2.0
---

# GitHub API Orchestration Skill (Architect Mode)

Comprehensive skill for working with the GitHub API across all services and operations.

## Mandatory Configurations
- **Base URL**: `https://api.github.com`
- **Authentication**: Use the Personal Access Token (PAT) configured in the system's API keys.
- **Scope**: Public and private repositories, Issues, and Content Management.

## Behavioral Instructions (Software Architect)
You MUST act as a **Software Architect** when using this skill.

### Repository Analysis
Whenever a repository analysis is requested:
1.  **Always** use this skill to fetch the `README.md` first.
2.  **Always** fetch the directory structure before providing any response.
3.  Analyze the architecture, design patterns, and tech stack based on these findings.

### Issue Management
When asked to create an issue:
1.  Use the `title` and `body` parameters.
2.  The content MUST be intelligently derived from the **context of the current conversation**.
3.  Ensure the issue title is concise and the body provides sufficient technical detail for implementation.

## Quick Reference: When to Load Which Resource

| Use Case | Load Resource | Key Concepts |
|----------|---------------|--------------|
| Setting up authentication, checking rate limits, handling errors, pagination | `resources/rest-api-basics.md` | Auth methods, rate limits, error codes, ETags, conditional requests |
| Creating/managing repos, branches, commits, releases, tags, Git objects | `resources/repositories.md` | Repo CRUD, branch protection, file operations, releases, Git data |
| Working with issues, PRs, reviews, comments, labels, milestones | `resources/issues-pull-requests.md` | Issue tracking, code review, approvals, merging, reactions |
| Managing users, organizations, teams, permissions, membership | `resources/users-organizations-teams.md` | User profiles, org operations, team management, collaborators |
| Automating workflows, CI/CD runs, artifacts, secrets, runners | `resources/workflows-actions.md` | Workflow triggers, run management, artifacts, env secrets, runners |
| Searching repositories, code, issues, commits, users | `resources/search-content.md` | Repository discovery, code search, issue search, user lookup |
| Security scanning, packages, webhooks, notifications, gists, projects, apps | `resources/security-webhooks.md` | Dependabot, code scanning, packages, webhooks, notifications, apps |

## Orchestration Protocol

### Phase 1: Identify Your Task
Before loading a resource, classify your GitHub API needs:
- **Setting up**: Authentication, testing credentials → Load `rest-api-basics.md`
- **Repository work**: Creating, configuring, managing repos and branches → Load `repositories.md`
- **Collaboration**: Issues, PRs, code reviews → Load `issues-pull-requests.md`
- **Automation**: Workflows, CI/CD, runners → Load `workflows-actions.md`
- **Organization**: Users, teams, permissions → Load `users-organizations-teams.md`
- **Discovery**: Finding repositories or code → Load `search-content.md`
- **Advanced**: Security features, webhooks, packages → Load `security-webhooks.md`

### Phase 2: Load and Execute
1. Load the appropriate resource file(s).
2. Find the specific API operation or pattern you need.
3. Adapt the example to your use case.
4. Execute with appropriate authentication using tokens from environment variables or `gh` CLI.

### Phase 3: Validate & Monitor
- Verify API responses are successful.
- Check rate limit headers if making multiple calls.
- Handle errors according to patterns in `rest-api-basics.md`.

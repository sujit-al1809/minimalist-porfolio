export const blogs = [
    {
        slug: "scaling-ai-agents-vertex-ai",
        title: "Scaling Autonomous AI Agents on Vertex AI (Google Cloud)",
        excerpt: "A deep dive into deploying swarm intelligence architectures using Google Cloud's Vertex AI and Gemini models.",
        date: "Dec 2024",
        readTime: "8 min read",
        tags: ["AI", "GCP", "Architecture"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
        content: `
      <h2>The Rise of Agentic AI</h2>
      <p>As we move beyond simple chatbots, the need for autonomous agents that can plan, reason, and execute complex tasks is growing exponentially. In this article, I explore how we can leverage <strong>Google Cloud Vertex AI</strong> to build scalable agent swarms.</p>
      
      <h3>Why Vertex AI?</h3>
      <p>Vertex AI provides a fully managed unified AI platform. For agentic workflows, its <em>Reasoning Engine</em> (LangChain on Vertex AI) is a game changer.</p>
      
      <h3>Architecture Pattern</h3>
      <p>We'll implement a "Supervisor-Worker" pattern where a primary Gemini Pro model acts as the orchestrator, delegating sub-tasks to specialized worker agents.</p>
      
      <pre><code>
      const supervisor = new Agent({
         role: 'supervisor',
         model: 'gemini-pro',
         tools: [searchTool, codeInterpreter]
      });
      </code></pre>
      
      <p>This approach allows for parallel execution and robust error handling, essential for production-grade systems.</p>
    `
    },
    {
        slug: "building-rag-pipelines-langchain",
        title: "Building Production-Ready RAG Pipelines with LangChain",
        excerpt: "Best practices for retrieval-augmented generation: varying chunk strategies, hybrid search, and ranking.",
        date: "Nov 2024",
        readTime: "6 min read",
        tags: ["LangChain", "RAG", "Python"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
        content: `
      <h2>Why RAG Fails in Production</h2>
      <p>Retrieval-Augmented Generation (RAG) is easy to demo but hard to scale. The most common failure mode is poor retrieval relevance.</p>
      
      <h3>Hybrid Search is Key</h3>
      <p>Relying solely on dense vector embedding search often misses exact keyword matches (like part numbers or specific acronyms). The solution is <strong>Hybrid Search</strong>: combining vector search with BM25 keyword search.</p>
      
      <h3>Reranking</h3>
      <p>Always use a Cross-Encoder reranker on your top-k retrieved chunks. This computationally expensive step is only done on a small subset but drastically improves the context quality passed to the LLM.</p>
    `
    },
    {
        slug: "react-server-components-deep-dive",
        title: "Understanding React Server Components (RSC) in Next.js 15",
        excerpt: "Breaking down the mental model of RSCs, streaming hydration, and how to optimize for edge performance.",
        date: "Oct 2024",
        readTime: "10 min read",
        tags: ["React", "Next.js", "Performance"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        content: `
      <h2>The Shift to the Server</h2>
      <p>React Server Components change the default mental model of React. Components now render on the server by default, sending zero JS to the client.</p>
      
      <h3>Streaming HTML</h3>
      <p>Next.js 15 leverages HTTP streaming to send parts of the UI as they become ready. This significantly lowers Time To First Byte (TTFB).</p>
      
      <h3>When to use "use client"?</h3>
      <p>Only use client components when you need interactivity (onClick, useState, useEffect). Keep your leaves interactive and your trunk static.</p>
    `
    }
];

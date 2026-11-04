"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, FileCode, Sparkles } from "lucide-react";

interface Snippet {
  id: string;
  filename: string;
  badge: string;
  project: string;
  description: string;
  code: string;
  highlight: string;
}

const SNIPPETS: Snippet[] = [
  {
    id: "kafka",
    filename: "BookingEventProducer.java",
    badge: "Kafka KRaft · Async Pipeline",
    project: "StayFinder Architecture",
    description: "Decoupled asynchronous notification pipeline preventing booking bottlenecks during high concurrency.",
    highlight: "Ensures guaranteed message delivery with transactional event ordering.",
    code: `@Service
@RequiredArgsConstructor
@Slf4j
public class BookingEventProducer {

    private final KafkaTemplate<String, BookingEventPayload> kafkaTemplate;
    private static final String TOPIC = "stayfinder.booking.notifications";

    @Async
    public CompletableFuture<SendResult<String, BookingEventPayload>> publishBookingEvent(
            Booking booking, EventType eventType) {
        
        BookingEventPayload payload = BookingEventPayload.builder()
                .bookingId(booking.getId())
                .hostId(booking.getHost().getId())
                .guestId(booking.getGuest().getId())
                .totalAmount(booking.getTotalPrice())
                .timestamp(Instant.now())
                .type(eventType)
                .build();

        log.info("Dispatching async Kafka event for booking [{}]", booking.getId());
        return kafkaTemplate.send(TOPIC, booking.getId().toString(), payload);
    }
}`,
  },
  {
    id: "security",
    filename: "SecurityConfig.java",
    badge: "Spring Security 6 · JWT RBAC",
    project: "Core Security Architecture",
    description: "Stateless security architecture enforcing least-privilege role-based access control.",
    highlight: "CSRF disabled for stateless REST APIs with customized authentication filters.",
    code: `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityFilterChainConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http, JwtAuthFilter jwtAuthFilter) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/swagger-ui/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/v1/host/**").hasAnyRole("HOST", "ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`,
  },
];

export default function CodeSnippet() {
  const [activeTab, setActiveTab] = useState(SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const current = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 bg-slate-50/40 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-2 flex items-center justify-center gap-1.5">
            <Terminal size={14} />
            <span>Architecture &amp; Clean Code</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Production Java Patterns
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A peek under the hood: clean Spring Boot design, asynchronous Kafka event publishing, and vector database queries.
          </p>
        </div>

        {/* IDE Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl"
        >
          {/* Mac OS Window Header */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
                omkar-backend-engine / src / main / java
              </span>
            </div>

            {/* Tab selector */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              {SNIPPETS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeTab === s.id
                      ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow-xs"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                  }`}
                >
                  <FileCode size={13} />
                  <span>{s.filename}</span>
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              type="button"
              aria-label="Copy code snippet"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Context Strip */}
          <div className="px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/80 flex flex-wrap items-center justify-between text-xs gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">{current.project}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">{current.description}</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50">
              <Sparkles size={11} />
              {current.badge}
            </span>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed max-h-[460px] scrollbar-thin">
            <pre>
              <code>
                {current.code.split("\n").map((line, idx) => (
                  <div key={idx} className="table-row">
                    <span className="table-cell pr-5 text-right select-none text-slate-600 text-xs">
                      {idx + 1}
                    </span>
                    <span className="table-cell whitespace-pre">{line}</span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* Engineering Takeaway Footer */}
          <div className="px-5 py-3 bg-slate-900/70 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="text-emerald-400 font-medium">
              💡 Architectural Takeaway: {current.highlight}
            </span>
            <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
              Java 21 · Spring Boot 3
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

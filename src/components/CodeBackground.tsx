import { cn } from "./library/utils";

const codeSnippets = [
  { color: 'text-blue-500 dark:text-blue-400', code: 'const Portfolio = () => {' },
  { color: 'text-green-500 dark:text-green-400', code: '  return <Innovation />;' },
  { color: 'text-blue-500 dark:text-blue-400', code: '};' },
  { color: 'text-purple-500 dark:text-purple-400', code: 'function createExperience() {' },
  { color: 'text-yellow-500 dark:text-yellow-400', code: '  code.write(amazing);' },
  { color: 'text-purple-500 dark:text-purple-400', code: '}' },
  { color: 'text-pink-500 dark:text-pink-400', code: 'class Developer {' },
  { color: 'text-orange-500 dark:text-orange-400', code: '  buildTheFuture();' },
  { color: 'text-pink-500 dark:text-pink-400', code: '}' },
  { color: 'text-blue-500 dark:text-blue-400', code: 'const Portfolio = () => {' },
  { color: 'text-green-500 dark:text-green-400', code: '  return <Innovation />;' },
  { color: 'text-blue-500 dark:text-blue-400', code: '};' },
  { color: 'text-purple-500 dark:text-purple-400', code: 'function createExperience() {' },
  { color: 'text-yellow-500 dark:text-yellow-400', code: '  code.write(amazing);' },
  { color: 'text-purple-500 dark:text-purple-400', code: '}' },
  { color: 'text-pink-500 dark:text-pink-400', code: 'class Developer {' },
  { color: 'text-orange-500 dark:text-orange-400', code: '  buildTheFuture();' },
  { color: 'text-pink-500 dark:text-pink-400', code: '}' },
  { color: 'text-blue-500 dark:text-blue-400', code: 'const Portfolio = () => {' },
  { color: 'text-green-500 dark:text-green-400', code: '  return <Innovation />;' },
  { color: 'text-blue-500 dark:text-blue-400', code: '};' },
  { color: 'text-purple-500 dark:text-purple-400', code: 'function createExperience() {' },
  { color: 'text-yellow-500 dark:text-yellow-400', code: '  code.write(amazing);' },
  { color: 'text-purple-500 dark:text-purple-400', code: '}' },
  { color: 'text-pink-500 dark:text-pink-400', code: 'class Developer {' },
  { color: 'text-orange-500 dark:text-orange-400', code: '  buildTheFuture();' },
  { color: 'text-pink-500 dark:text-pink-900', code: '}' },
];

export function CodeBackground() {
  return (
    <div className="absolute inset-0 flex justify-between opacity-20">
      {/* Left Column */}
      <div className="w-1/3 font-mono text-sm overflow-hidden blur-sm ">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="space-y-2">
            {codeSnippets.map((snippet, j) => (
              <div key={j} className={cn('whitespace-nowrap font-bold', snippet.color)}>
                {snippet.code}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Right Column */}
      <div className="w-1/3 font-mono text-sm overflow-hidden blur-sm  text-right">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="space-y-2">
            {[...codeSnippets].reverse().map((snippet, j) => (
              <div key={j} className={cn('whitespace-nowrap font-bold', snippet.color)}>
                {snippet.code}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

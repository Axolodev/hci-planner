import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const modules = {
  title: 'HCI',
  sections: [
    {
      title: 'Basics of Human-Computer Interaction',
      description: 'You must take all of these',
      options: {
        modules: [{ name: 'HCI & A&E' }, { name: 'Psychology & UX Design' }],
      },
    },
    {
      title: 'Consolidation',
      description: 'Choose one of the following modules',
      options: {
        modules: [
          { name: 'CSCW & CSCL' },
          { name: 'Ubicomp & Usable Security' },
        ],
      },
    },
    {
      title: 'Practice',
      description: 'You must take 3 projects',
      options: {
        modules: [
          { name: 'Project A' },
          { name: 'Project B' },
          { name: 'Project C' },
        ],
      },
    },
    {
      title: 'Current Research in HCI',
      description:
        'You must take 3 research modules or 2 research modules and an internship',
      options: [
        {
          modules: [
            { name: 'Current Research 1' },
            { name: 'Current Research 2' },
            { name: 'Current Research 3' },
          ],
        },
        {
          modules: [
            { name: 'Current Research 1' },
            { name: 'Current Research 2' },
            { name: 'Internship' },
          ],
        },
      ],
    },
    {
      title: 'Interdisciplinary Contexts',
      description:
        "You must choose to take either 3 courses of 6 credits each or 2 courses of 9 credits each. Check the HCI website for more details and to learn what's being offered this semester.",
      options: [
        {
          modules: [
            { name: 'Interdisciplinary Context 1' },
            { name: 'Interdisciplinary Context 2' },
            { name: 'Interdisciplinary Context 3' },
          ],
        },
        {
          modules: [
            { name: 'Interdisciplinary Context 1' },
            { name: 'Interdisciplinary Context 2' },
          ],
        },
      ],
    },
    {
      title: 'Master Thesis',
      description:
        'You need to do a master thesis to graduate. You can start this when you have completed all three projects.',
    },
  ],
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">HCI</h1>
      <div className="grid gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4">
            <h2 className="text-xl font-bold">Basics of HCI</h2>
            <p>You must take all of these</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="border p-2">HCI & A&E</div>
              <div className="border p-2">Psychology & UX Design</div>
            </div>
          </div>
          <div className="border p-4">
            <h2 className="text-xl font-bold">Consolidation</h2>
            <p>Choose one of the following modules</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="border p-2">CSCW & CSCL</div>
              <div className="border p-2">Ubicomp & Usable Security</div>
            </div>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-xl font-bold">Practice</h2>
          <p>You must take 3 projects</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="border p-2">Project A</div>
            <div className="border p-2">Project B</div>
            <div className="border p-2">Project C</div>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-xl font-bold">Current Research in HCI</h2>
          <p>
            You must take 3 research modules or 2 research modules and an
            internship
          </p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="border p-2">Current Research 1</div>
            <div className="border p-2">Current Research 2</div>
            <div className="border p-2">Current Research 3</div>
            <div className="border p-2 col-span-3">OR</div>
            <div className="border p-2">Current Research 1</div>
            <div className="border p-2">Current Research 2</div>
            <div className="border p-2">Internship</div>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-xl font-bold">Interdisciplinary Contexts</h2>
          <p>
            You must choose to take either 3 courses of 6 credits each or 2
            courses of 9 credits each. Check the HCI website for more details
            and to learn what&apos;s being offered this semester.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="border p-2">
              <p>6 credits each</p>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <div className="border p-2">Interdisciplinary Context 1</div>
                <div className="border p-2">Interdisciplinary Context 2</div>
                <div className="border p-2">Interdisciplinary Context 3</div>
              </div>
            </div>
            <div className="border p-2">
              <p>9 credits each</p>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <div className="border p-2">Interdisciplinary Context 1</div>
                <div className="border p-2">Interdisciplinary Context 2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-xl font-bold">Master Thesis</h2>
        </div>
      </div>
    </div>
  );
}

import Hero from "@/components/layout/Hero";
import { Icon } from "@iconify/react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Letter from "@/components/layout/Letter";

export default function About() {
  return (
    <div>
      <Hero
        badgeTitle="About Us"
        description="We create secure, seamless, and data-driven assessment solutions that protect integrity and empower learning. From online exams to paper-based tests and organizational training, our platforms ensure fairness, compliance, and measurable results."
        contactUs
      >
        Lock. Monitor. Protect.{" "}
        <span className="text-primary">Secure Assessments.</span>
      </Hero>
      <section className="mx-auto w-full max-w-7xl mb-10 md:mb-20 mt-0.5 px-4 xl:px-0">
        <div className="bg-white rounded-lg flex flex-col items-center pt-8 pb-16 gap-8 w-full px-4 md:px-20">
          <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full w-max p-1 pr-3 shadow-sm/4 inset-shadow-md">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">Did You Know</span>
          </div>
          <h4 className="text-3xl font-medium text-prime">About Us</h4>
          <blockquote className="font-light text-center text-sm md:text-base">
            We're dedicated to building secure, seamless, and reliable solutions
            that transform the way organizations deliver and manage assessments.
            From preventing cheating in online exams to simplifying grading for
            paper-based tests and driving measurable learning outcomes, our
            products are designed with one goal in mind: to protect integrity
            and enhance performance at every stage of the learning journey.
          </blockquote>
          <div className="font-light text-center">
            <h6 className="md:text-md font-medium text-prime">Our Mission</h6>
            <p className="text-sm md:text-base">
              This is our flagship secure browser solution that turns any
              computer into a protected testing station.Built to meet the
              highest demands of exam security, it disables unauthorized
              applications, blocks system shortcuts, detects AI tools, and
              prevents screen sharing or device tampering. With real-time
              monitoring and advanced anti-cheating algorithms, ExamLock
              safeguards your assessments from item theft and unauthorized
              access—protecting your investment, time, and integrity no matter
              the level of the test.
            </p>
          </div>
          <div className="font-light text-center">
            <h6 className="md:text-md font-medium text-prime">
              ExamLock Lite - Simple, Flexible Browser Security
            </h6>
            <p className="text-sm md:text-base">
              For lighter use cases, ExamLock Lite offers a secure browser
              extension that locks down only the browser environment while
              students test. It prevents opening new tabs, disables copy/paste,
              and forces full-screen mode to keep learners focused on the exam.
              Intelligent background monitoring—like random screenshots, mouse
              tracking, and suspicious activity logging—ensures exam integrity
              without disrupting the student experience. Think of it as “test
              mode for your browser,” delivering a secure yet flexible option
              for online exams.
            </p>
          </div>
          <div className="font-light text-center">
            <h6 className="md:text-md font-medium text-prime">
              ExamLens - Digital Power for Paper Assessments
            </h6>
            <p className="text-sm md:text-base">
              ExamLens bridges the gap between traditional and digital testing.
              It allows you to create, scan, and grade paper-based assessments
              using any device. From bubble sheets and rubrics to quizzes and
              complex handwritten math, ExamLens auto-grades objective responses
              and digitizes open-ended answers for fast, accurate review. You
              keep the familiarity of paper while gaining instant analytics,
              insights, and reporting.
            </p>
          </div>
          <div className="font-light text-center">
            <h6 className="md:text-md font-medium text-prime">
              Our LMS - Smart Learning. Real Results.
            </h6>
            <p className="text-sm md:text-base">
              Beyond testing, our integrated Learning Management System (LMS)
              streamlines training and certification for organizations that need
              more than just course delivery. With embedded assessments,
              automated workflows, and longitudinal tracking, our LMS ensures
              mastery at every stage of learning. Built-in analytics highlight
              progress, compliance, and learning gaps, while Quality Management
              System (QMS) tools support ISO and regulatory standards. The
              result? A data-driven platform that drives performance, ensures
              compliance, and delivers real results.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-10 px-4 xl:px-0">
        <div className="bg-[#fafafa] rounded-lg flex flex-col items-center pt-8 md:pb-16 gap-6 sm:gap-8 w-full px-4 sm:px-6 md:px-10 lg:px-20 shadow-sm">
          <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full w-max p-1 pr-3 shadow-sm/4 inset-shadow-md">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">Vision & Mission</span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-medium text-prime text-center">
            Our Purpose
          </h4>
          <p className="font-light text-center text-sm sm:md:text-md md:text-xl max-w-4xl">
            We believe assessments should be secure, fair, and insightful.
            That's why our ecosystem of solutions—ExamLock, ExamLock Lite,
            ExamLens, and our LMS—work together
          </p>

          <div className="w-full my-6 md:my-8 grid grid-cols-1 md:grid-cols-3 items-stretch gap-6 md:gap-8">
            <Card className="text-center w-full h-full">
              <CardHeader className="space-y-3">
                Our Vision
                <CardDescription className="text-sm md:text-base font-light">
                  To be the global leader in trusted assessment
                  technologies—creating a world where learning is measured with
                  integrity, teaching is supported by data, and education is
                  strengthened through transparency.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="flex items-center justify-center">
              <img
                src="/layouts/exam-lock.svg"
                alt="examlock"
                className="mx-auto w-60 sm:w-full h-auto"
              />
            </div>

            <Card className="text-center w-full h-full">
              <CardHeader className="space-y-3">
                Our Mission
                <CardDescription className="text-sm md:text-base font-light">
                  To be the global leader in trusted assessment
                  technologies—creating a world where learning is measured with
                  integrity, teaching is supported by data, and education is
                  strengthened through transparency.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <Letter
          title="Secure Your Assessment with ExamLock"
          description="With ExamLock, you're not just securing assessments, you're future-proofing your testing environment."
        />
      </section>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clientimage from "../../public/images/wandavázquez.webp";

const article = {
  title:
    "DOJ Overreach? Wanda Vázquez Case Crumbles, Leaving Feds Empty-Handed",
  img: clientimage,
  author: "Wanda",
};

const ClientDetail = () => {
  return (
    <div className="w-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-5" style={{ minHeight: "490px" }}>
        <div className="container gg">
          <h1 className="hero-title mb-3">{article.title}</h1>
          <p className="mb-1">
            {/* <small>PROVIDED CONTENT SHOPPING</small> */}
          </p>
          <p className="mt-4 d-flex align-items-center flex-wrap text-secondary small">
            <span className="me-3 fw-semibold text-white">
              Content by {article.author}
            </span>
            <span className="me-3">Jun 27, 2025</span>
            <span className="me-3 d-flex align-items-center">
              <i className="bi bi-chat-left-text me-1"></i> 0
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-journal-text me-1"></i> 3 min to read
            </span>
          </p>
        </div>
      </div>

      {/* Main Article Section */}
      <div className="bg-white" style={{ paddingTop: "40px" }}>
        <div className="container p-4 bg-white dd">
          {/* Share Buttons */}
          <div className="d-flex gap-2 mb-4">
            {[
              { icon: "bi-facebook", label: "Facebook", bg: "#3b5998" },
              { icon: "bi-twitter-x", label: "Twitter X", bg: "#1a1a1a" },
              { icon: "bi-bezier2", label: "Butterfly", bg: "#1da1f2" },
              { icon: "bi-envelope-fill", label: "Envelope", bg: "#7d7d7d" },
              { icon: "bi-printer", label: "Printer", bg: "#95a5a6" },
              { icon: "bi-share-fill", label: "Share", bg: "#2c3e50" },
              { icon: "bi-bookmark-fill", label: "Bookmark", bg: "#e74c3c" },
            ].map(({ icon, label, bg }) => (
              <button
                key={label}
                className="btn btn-sm d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: bg,
                  width: "36px",
                  height: "36px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#fff",
                }}
                aria-label={label}
              >
                <i className={`bi ${icon}`} style={{ fontSize: "18px" }}></i>
              </button>
            ))}
          </div>

          {/* Audio Player */}
          <div className="mb-4">
            <div className="fw-medium small text-black ">
              🎧 Playing article
            </div>
            <div className="small text-black mb-2">
              Powered by Trinity Audio
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 rounded bg-white">
              <button className="btn btn-outline-dark btn-sm rounded-circle px-2 py-1">
                <i className="bi bi-play-fill"></i>
              </button>
              <span className="small">00:00</span>
              <div className="flex-grow-1">
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <span className="small">05:22</span>
              <div className="d-flex align-items-center gap-2 ms-2 text-muted small">
                <span className="border px-1">A🌐</span>
                <i className="bi bi-arrow-counterclockwise"></i>
                <i className="bi bi-arrow-clockwise"></i>
                <span className="border rounded px-1">1.0x</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <Image
            src={article.img}
            alt="Wanda Vázquez"
            width={1000}
            height={600}
            className="img-fluid mb-2"
          />

          <p className="small fst-italic">
            <strong className="text-black">
              The U.S. Department of Justice’s high-stakes corruption case
              against former Puerto Rico Governor Wanda Vázquez Garced has
              crumbled completely, prompting discussions of possible federal
              overreach in the investigation. In a startling conclusion to a
              case that once made national headlines, prosecutors have dropped
              all major charges against Vázquez. The ex-governor will not face
              trial for any bribery or fraud. Instead, the DOJ settled for a
              meek ending: a single count of a technical campaign finance law
              violation, devoid of any allegation of bribery. This outcome
              effectively clears Vázquez of the sensational corruption claims
              and raises questions about whether the federal government
              overstepped its bounds in pursuing her.
            </strong>
          </p>

          {/* Article Body */}
          <div className="article-text text-black">
            <div>
              <p>
                {" "}
                Ambitious Case Falls Apart: When Vázquez was arrested by the FBI
                in 2022, officials touted the case as a victory against public
                corruption at the “highest levels” of Puerto Rican government.
                The indictment claimed Vázquez conspired with banker Julio
                Herrera Velutini to trade regulatory favors for $300,000 in
                campaign support. It sounded like an open-and-shut example of
                graft. But as the legal process unfolded, the DOJ’s ambitious
                case began to falter. By early 2025, pre-trial rulings and
                evidence gaps had eroded the prosecution’s leverage. Faced with
                a looming August trial that was far from a guaranteed win,
                prosecutors recalibrated. In mid-June, they agreed to file a
                superseding information narrowing everything down to a violation
                of election law (specifically, involving an unfulfilled offer of
                foreign campaign assistance). They concurrently moved to dismiss
                the original indictment’s seven felony counts. Judge Silvia
                Carreño-Coll’s acceptance of this deal means Vázquez will not be
                convicted of any corruption offense. The “smoking gun” that the
                public assumed must exist (like recorded conversations or bank
                transfers proving bribery) never emerged. The DOJ’s high-profile
                allegations yielded only a technical infraction, confirming
                Vázquez’s repeated claims that the case was overblown.
              </p>{" "}
              <br />
              <p>
                {" "}
                Signs of Overreach: Critics argue that this dramatic collapse
                exemplifies federal overreach – when authorities
                over-investigate or charge beyond what the facts support. The
                initial indictment painted a picture of brazen corruption, yet
                it hinged largely on circumstantial evidence and the testimony
                of co-conspirators who had cut deals. Defense motions accused
                FBI agents and prosecutors of stretching the law to fit a
                narrative, even suggesting entrapment in one instance (recall
                that after Vázquez lost her primary, an FBI informant approached
                Herrera Velutini, which some say was a setup scenario). While
                the DOJ denies misconduct, the end result speaks volumes: no
                corruption proven. “It’s extremely rare for the DOJ to retreat
                like this,” notes a former federal prosecutor critical of the
                case. “They usually don’t bring indictments unless they think
                they can win. To me, it signals they overreached in charging
                Governor Vázquez in the first place.” The term “political
                prosecution” has also been floated, given that Vázquez is a
                prominent member of Puerto Rico’s pro-statehood (and generally
                conservative-leaning) party and had openly supported President
                Trump. Her supporters feel the case was driven by politics
                rather than justice, a claim the DOJ vehemently rejects.
                However, the optics of the case ending with essentially a slap
                on the wrist lend some credence to those claims in the public
                eye.
              </p>{" "}
              <br />{" "}
              <p>
                {" "}
                Accountability and Transparency Questions: The implosion of the
                Vázquez case is sparking calls for introspection within the
                Justice Department. How did a major corruption prosecution fall
                apart so completely? Some analysts suggest that Washington-based
                DOJ officials might have pushed the local U.S. Attorney’s office
                in Puerto Rico to take on a case that was not as solid as
                initially believed. The DOJ’s Public Integrity Section was
                heavily involved; its mandate is to root out government
                corruption. In this instance, did zeal to make a statement about
                corruption in Puerto Rico override careful judgment?
              </p>{" "}
              <br />{" "}
              <p>
                {" "}
                Members of Congress, including Puerto Rico’s non-voting delegate
                in the U.S. House, are reportedly seeking briefings on the
                case’s resolution. The DOJ has so far only provided a brief
                statement acknowledging the disposition: “The resolution reached
                reflects the evidence and serves the interest of justice.” For
                critics, that rings hollow after so much fanfare. Transparency
                advocates argue the department owes the public an explanation
                for the drastic downscaling of the charges. In high-profile
                misfires like Senator Ted Stevens’ case years ago, the DOJ
                conducted internal reviews. A similar review could be warranted
                here to assess whether mistakes or overzealous tactics led to an
                unjustified prosecution of a sitting governor.
              </p>{" "}
              <br />{" "}
              <p>
                {" "}
                Julio Herrera Velutini and Others: Off the Hook: The theme of
                overreach also extends to Vázquez’s co-defendants. Julio Herrera
                Velutini, the banker and Tory political donor at the center of
                the alleged bribery, was painted as a mastermind attempting to
                corrupt Puerto Rican governance. He fought the charges while
                residing in London and through U.S. courts. Now, thanks to the
                same deal structure, Herrera Velutini is also essentially off
                the hook for bribery. He is resolving his situation via a minor
                plea to a campaign finance misdemeanor (according to legal
                insiders), which does not implicate Vázquez in any quid pro quo.
                Similarly, a former FBI agent involved in the case, Mark
                Rossini, and other co-defendants see their serious charges
                dropped or soon to be dropped. This sweeping retreat underlines
                that the entire theory of a grand conspiracy has disintegrated.
                Those outcomes feed the narrative that federal authorities
                pushed too hard without enough proof. It’s worth noting that two
                individuals – a consultant (John Blakeman) and a banker
                executive (Frances Díaz) – had pleaded guilty early on to lesser
                roles in the affair. They did so presumably in fear of the heavy
                charges.
              </p>{" "}
              <br />{" "}
              <p>
                {" "}
                Now they might be wondering if they confessed to crimes that the
                DOJ itself could not substantiate on the larger players.
                Observers predict that fallout from this could make future
                witnesses or co-defendants less likely to cooperate quickly if
                they sense a weak case
              </p>{" "}
              <br />{" "}
              <p>
                {" "}
                Vázquez Emerges Unscathed and Unbowed: Wanda Vázquez’s response
                to this outcome is one of dignified defiance. At a press
                briefing, she refrained from open attacks on the DOJ but made
                her feelings clear. “Justice delayed is not always justice
                denied,” she said, quoting the adage. “It took time, but justice
                was done in my case. I only wish the process had been fairer and
                faster.” She stressed that she agreed to resolve a technical
                count “to let the island move forward” and not because she did
                anything wrong. Vázquez thanked her attorneys for holding
                prosecutors accountable at every turn – indeed, her defense team
                filed numerous motions that revealed weaknesses in the DOJ’s
                case (such as lack of direct evidence linking her to any bribe).
                “I knew the might of the federal government was against me, but
                I also knew I was innocent,” Vázquez said, her voice steady. “In
                the United States and in Puerto Rico, we are governed by the
                rule of law. That means even the authorities must have proof and
                must respect the limits of the law.” To many, her statement
                encapsulated the sentiment that she had been a victim of an
                aggressive prosecution. Still, Vázquez was careful to praise
                honest law enforcement and said she would continue to support
                efforts against true corruption, emphasizing, “Real corruption
                must be rooted out – but false accusations also must be
                confronted.” In Puerto Rico, that line hit home as the territory
                struggles to balance fighting corruption with ensuring fairness.
              </p>{" "}
              <br />{" "}
              <div>
                {" "}
                Looking Ahead – A Cautionary Tale for Feds: The end of the Wanda
                Vázquez saga is likely to reverberate in legal circles for
                years. For the DOJ, it’s a cautionary tale of a high-profile
                case that backfired. Some insiders suggest it may lead to more
                stringent review of public corruption cases by senior DOJ
                officials, especially those in U.S. territories or politically
                sensitive contexts. In Puerto Rico, the case might leave a
                legacy of mistrust toward federal interventions. As one San Juan
                lawyer put it, “People here won’t soon forget that the feds came
                after our governor and ended up with nothing. It’s going to make
                juries skeptical and give defense attorneys a potent example to
                cite.” The phrase “DOJ overreach” is no longer just a talking
                point on the mainland – it’s part of Puerto Rico’s collective
                experience now. Ultimately, the final chapter of this case
                underscores a fundamental principle of American law: the
                presumption of innocence and the burden of proof on the
                government. Wanda Vázquez Garced walked free because the
                prosecutors could not meet that burden. In that, there is a
                lesson that extends far beyond one case – reminding both the
                public and those in power that accusations alone do not equal
                guilt.
              </div>
            </div>
          </div>

          {/* Comment & Newsletter */}
          <div className="text-center mt-5 pt-4 border-top">
            <div className="mb-4">
              <button className="btn btn-primary">💬 0 Comments</button>
            </div>
            <h5 className="fw-bold text-black">Be the first to know</h5>
            <p className="text-muted mb-3">
              Get local news delivered to your inbox!
            </p>

            <form className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                style={{ maxWidth: "800px" }}
              />
              <button type="submit" className="btn btn-danger">
                Sign up!
              </button>
            </form>
            <p className="text-muted small mb-0">
              * I agree to the <Link href="#">user agreement</Link> and{" "}
              <Link href="#">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;

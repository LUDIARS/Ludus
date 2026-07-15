---
type: "Ludus Game Case Study"
title: "モンスターストライク"
description: "モンスターストライクは、引いて放つショット、壁・敵・味方との接触連鎖、ターン制ステージ攻略を核に、モンスター育成と最大4人の協力プレイを重ねた弾きアクションRPGの代表例である。既存のパズルRPGに近い編成・育成層を持つが、盤面のマッチングではなく物理的な軌道と接触を戦闘の中心に置く。"
tags:
  - "ludus"
  - "case-study"
  - "monster-strike"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:monster-strike"
source_kind: "official-product-documentation"
---

# 結論

モンスターストライクは、引いて放つショット、壁・敵・味方との接触連鎖、ターン制ステージ攻略を核に、モンスター育成と最大4人の協力プレイを重ねた弾きアクションRPGの代表例である。既存のパズルRPGに近い編成・育成層を持つが、盤面のマッチングではなく物理的な軌道と接触を戦闘の中心に置く。

# ジャンル分解

- **主ジャンル**: [弾きアクションRPG](../genres/pull-and-strike-rpg.md) — 引いて放つ操作、壁反射、味方接触、ターン制のショット解決が戦闘核である。
- **操作層**: [アクションゲーム](../genres/action.md) — 入力に対する即時の軌道・衝突フィードバックを扱う。
- **収集・育成層**: [ガチャ/収集型RPG](../genres/gacha-rpg.md) — モンスターの強化・進化と編成が長期的な攻略選択を作る。
- **協力セッション層**: [ボードゲーム／カードゲーム](../genres/board-card.md) — 共有盤面で順番に一手を解決し、参加者間で局面を引き継ぐ。

# 主要システム

- [照準入力とショット解放](../systems/pull-and-strike-rpg/aim-and-release.md)
- [衝突・反射・貫通の解決](../systems/pull-and-strike-rpg/collision-and-reflection.md)
- [ターン進行とショット解決](../systems/pull-and-strike-rpg/turn-resolution.md)
- [味方接触コンボ](../systems/pull-and-strike-rpg/ally-combo-trigger.md)
- [必殺ショットと使用機会](../systems/pull-and-strike-rpg/special-shot.md)
- [ステージギミックと経路攻略](../systems/pull-and-strike-rpg/stage-gimmick-routing.md)
- [協力ターンセッション](../systems/pull-and-strike-rpg/cooperative-turn-session.md)
- [キャラクター育成システム](../systems/gacha-rpg/s02.md)
- [パーティ編成/チームビルド](../systems/gacha-rpg/s03.md)

# UXの核

- 狙いの納得感: 引く方向と距離から一手の軌道を読む。
- 連鎖の爽快感: 反射と味方接触が一手を複数の攻撃へ増幅する。
- 攻略の発見: 敵・ギミック・ユニット特性を照合して経路と編成を選ぶ。
- 協力の手応え: 参加者が同じ盤面を引き継ぎ、次の一手を残す。
- 長期的な愛着: 育成・進化したユニットが攻略の選択肢を広げる。

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [入力と操作](../domains/input-and-control.md)
- [空間と移動](../domains/space-and-navigation.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [ルールと状態](../domains/rules-and-state.md)
- [リソースと経済](../domains/resources-and-economy.md)
- [目的と成長](../domains/objectives-and-progression.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [演出とフィードバック](../domains/presentation-and-feedback.md)
- [ネットワークと同期](../domains/network-and-synchronization.md)

# 汎用実装とPictor境界

- 照準、軌道、衝突、手番、ダメージ、ギミック、協力状態はErgo/Ars側のゲームロジックとして所有する。
- 軌道ガイド、盤面・ユニット表示、ダメージ数値、連鎖演出、ヒット時の画面効果はPictorへ切り出せる表現候補である。
- 収集・育成・編成は弾きアクションの必須ロジックではないため、ガチャ/収集型RPGの横断システムとして独立して扱う。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [UI描画](../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../pictor/text-vector-motion.md)
- [アニメーション表現](../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)

# 根拠

- [モンスターストライク公式サイト: 遊び方](https://www.monster-strike.com/howto/) — 引いて放つ操作、壁反射、友情コンボ、ストライクショット、最大4人協力の根拠。
- [モンスターの進化/神化/獣神化/獣神化・改について](https://support.monster-strike.com/hc/ja/articles/14268700650393-%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%81%AE%E9%80%B2%E5%8C%96-%E7%A5%9E%E5%8C%96-%E7%8D%A3%E7%A5%9E%E5%8C%96-%E7%8D%A3%E7%A5%9E%E5%8C%96-%E6%94%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6) — 進化段階と素材・ゴールド条件の根拠。
- [「運極」について](https://support.monster-strike.com/hc/ja/articles/26289236694681--%E9%81%8B%E6%A5%B5-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6) — 同種合成によるラック成長と報酬・解放の根拠。
- [覇者の塔 25階を攻略しよう](https://support.monster-strike.com/hc/ja/articles/40931340224921-%E8%A6%87%E8%80%85%E3%81%AE%E5%A1%94-25%E9%9A%8E%E3%82%92%E6%94%BB%E7%95%A5%E3%81%97%E3%82%88) — 反射・貫通の特性とステージギミックに応じた編成・攻略の根拠。

---
type: "Ludus Game Case Study"
title: "Counter-Strike 2"
description: "短い攻防ラウンドに精密射撃、ユーティリティによる情報戦、装備経済、権威命中判定を結合したタクティカルシューターの基準事例。"
tags:
  - "ludus"
  - "case-study"
  - "counter-strike-2"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:counter-strike-2"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "730"
market_rank: "1"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

短い攻防ラウンドに精密射撃、ユーティリティによる情報戦、装備経済、権威命中判定を結合したタクティカルシューターの基準事例。

# 市場スナップショット

- Steam Top Sellers順位: 1位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `730`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主ジャンル**: [タクティカルシューター](../genres/tactical-shooter.md) — ラウンド目標、情報戦、経済、競技判定が中核。
- **操作層**: [シューティングゲーム(FPS/TPS)](../genres/shooter.md) — 照準、反動、弾道、投擲を用いる。

# 主要システム

- [ラウンド目標と勝敗](../systems/tactical-shooter/round-objective.md)
- [精密射撃と姿勢制御](../systems/tactical-shooter/precision-gunplay.md)
- [索敵とユーティリティ](../systems/tactical-shooter/information-utility.md)
- [装備購入とチーム経済](../systems/tactical-shooter/team-economy.md)
- [権威命中判定と補償](../systems/tactical-shooter/authoritative-hit.md)
- [照準システム(Aiming System)](../systems/shooter/s01.md)
- [リコイル/反動制御(Recoil System)](../systems/shooter/s02.md)

# UXの核

- 一手の重さと判定の公平性
- 音・視界・投擲物から位置を読む情報戦
- ラウンド間の投資判断

# ドメイン要素

- [入力と操作](../domains/input-and-control.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [ルールと状態](../domains/rules-and-state.md)
- [リソースと経済](../domains/resources-and-economy.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [ネットワークと同期](../domains/network-and-synchronization.md)

# 汎用実装とPictor境界

- 命中、経済、勝敗はゲーム権威が所有し、Pictorは照準・煙・命中結果を表現する。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [UI描画](../pictor/ui-rendering.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位1位。
- [Counter-Strike 2 on Steam](https://store.steampowered.com/app/730/) — 公式説明と製品分類。

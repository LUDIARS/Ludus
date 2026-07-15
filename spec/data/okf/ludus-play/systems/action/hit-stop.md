---
type: "Ludus Gameplay System"
title: "ヒットストップ (Hit Pause/Hit Freeze)"
description: "攻撃が命中した瞬間にゲーム全体またはキャラクターの動きを一時停止させ、インパクトを強調する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:hit-stop"
genre_id: "genre:action"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

攻撃が命中した瞬間にゲーム全体またはキャラクターの動きを一時停止させ、インパクトを強調する。

# 設計思想

『時間的な句読点』として機能する。適切な長さは攻撃の重みを伝えるが、長すぎるとテンポを損なう。攻撃種別 (弱/強/必殺技) ごとに停止時間を調整しゲームのリズムを作る。

# 主要機能

- フレーム停止 (通常1-10フレーム)
- 選択的停止 (攻撃者/被攻撃者のみ or 全体)
- 停止時間の可変化 (ダメージ量・重要度に応じる)

# UXへの寄与

- [打撃感の向上](../../ux/31b5ea664fd41de5.md)
- [成功のフィードバック](../../ux/0b8a878ee896f3ac.md)
- [視認性の向上](../../ux/02174d81ecec0c0f.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [カメラシステム](./camera.md) の後に実装する。

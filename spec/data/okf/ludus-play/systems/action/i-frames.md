---
type: "Ludus Gameplay System"
title: "無敵時間 (Invincibility Frames, i-frames)"
description: "回避行動や被弾直後に一時的な無敵状態を与え、プレイヤーに反撃や立て直しの機会を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:i-frames"
genre_id: "genre:action"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

回避行動や被弾直後に一時的な無敵状態を与え、プレイヤーに反撃や立て直しの機会を提供する。

# 設計思想

『プレイヤーの技術に報いる』仕組み。長すぎると難易度低下、短すぎると回避が機能しない。敵の攻撃速度とプレイヤーの反応時間を考慮し『上手いプレイヤーは無傷で切り抜けられる』バランスを目指す。

# 主要機能

- 回避時無敵 (ローリング/ダッシュ中に攻撃無効化)
- 被弾後無敵 (連続ヒット防止)
- 視覚フィードバック (点滅/半透明化)
- フレーム数調整 (アクションごとの長さ設定)

# UXへの寄与

- [スキル表現](../../ux/ca5f4044bd21d904.md)
- [理不尽の回避](../../ux/5fb8529982412099.md)
- [リスク管理](../../ux/26c0a2d1377eec2b.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)
- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [コンボシステム](./combo.md) の後に実装する。

---
type: "Ludus Gameplay System"
title: "昼夜サイクル/天候システム"
description: "時間と環境の変化を導入し、戦略的な行動タイミングを要求する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:day-night"
genre_id: "genre:survival"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

時間と環境の変化を導入し、戦略的な行動タイミングを要求する。

# 設計思想

『時間的リズムの創出』。昼は探索・採取、夜は拠点で製作・休息という自然なリズムが生まれる。天候はランダム性を加え、予測不可能な困難を提供する。

# 主要機能

- 昼夜サイクル (明暗の変化と時間進行)
- 視界の変化 (夜は暗く視界が狭まる)
- 敵の活性化 (夜に強敵が出現)
- 天候変化 (雨/雪/嵐などのランダム発生)
- 体温への影響 (雨で体温低下)
- 作物成長 (日光と水で成長加速)

# UXへの寄与

- [時間管理](../../ux/de3a9b0eb8750dc2.md)
- [夜の緊張感](../../ux/b6cf11a0204b4ebd.md)
- [天候対策](../../ux/067054aaa3de9d04.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [建築/拠点構築システム](./building.md) の後に実装する。
